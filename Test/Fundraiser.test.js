const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/FundraiserFactory.json');
const compiledFundraiser = require('../ethereum/build/Fundraiser.json');

//Variables
let accounts;
let factory;
let fundraiserAddress;
let fundraiser;
const MINIMUM = '100';

beforeEach(async ()=>{
  accounts = await web3.eth.getAccounts();
  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data: compiledFactory.bytecode})
    .send({from: accounts[0], gas: '1000000'});

  await factory.methods.createFundraiser(MINIMUM)
    .send({from: accounts[0], gas: '1000000'});

  [fundraiserAddress] = await factory.methods.getFundraisers().call();

  fundraiser = await new web3.eth.Contract(
    JSON.parse(compiledFundraiser.interface),
    fundraiserAddress
  )
});

describe('Fundaisers',()=>{
  it('deploys a factory and a fundraiser', ()=>{
    assert.ok(factory.options.address);
    assert.ok(fundraiser.options.address);
  });

  it('Returns a list of deployed fundraisers', async ()=>{
    assert.ok(fundraiserAddress);
  });

  it('Marks caller as a campaign manager', async ()=>{
    const manager = await fundraiser.methods.manager().call();
    assert.equal(accounts[0],manager);
  });

  it('Sets a minimum contribution upon creation',async ()=>{
    const minimum = await fundraiser.methods.minimumContribution().call();
    assert.equal(minimum,MINIMUM);
  });

  it('Allows external accounts to contribute, and marks them as approvers',async ()=>{
    await fundraiser.methods.contribute().send({
        from: accounts[1],
        value: '101'
      });

    const approversCounts = await fundraiser.methods.approversCount().call();
    const isApprover = await fundraiser.methods.approvers(accounts[1]).call();

    assert(approversCounts > 0);
    assert(isApprover);
  });

  it('Does not allow external accounts to enter below minumim contribution',async ()=>{
    try{
      await fundraiser.methods.contribute().send({
          from: accounts[1],
          value: '50'
        });
        assert(false);
    }catch(error){
      assert(error);
    };
  });


  it('Allows manager to create requests',async ()=>{
    await fundraiser.methods.createRequest(
      'Description',
      '100',
      accounts[1]
    ).send({
      from: accounts[0],
      gas: '5000000'
    });
    const request = await fundraiser.methods.requests(0).call();
    assert.equal('Description',request.description);
  });

  it('Allows only manager to create requests',async ()=>{
    try{
    await fundraiser.methods.createRequest(
      'Description',
      '100',
      accounts[1]
    ).send({
      from: accounts[2],
      gas: '5000000'
    });
    assert(false);
  }catch(error){
      assert(error);
    }
  });

  it('Allows for a end to end flow of creating a request, approving it and finalizing it',async ()=>{
    await fundraiser.methods.createRequest(
      'Description',
      web3.utils.toWei('0.02', 'ether'),
      accounts[1]
    ).send({
      from: accounts[0],
      gas: '5000000'
    });
    const beforeBalance = await web3.eth.getBalance(accounts[1]);
    //Account 1
    await fundraiser.methods.contribute().send({
        from: accounts[2],
        value: web3.utils.toWei('0.1', 'ether')
      });
    //Account 2
    await fundraiser.methods.contribute().send({
        from: accounts[3],
        value: web3.utils.toWei('0.1', 'ether')
      });
    //account 3
    await fundraiser.methods.contribute().send({
        from: accounts[4],
        value: web3.utils.toWei('0.1', 'ether')
      });
    await fundraiser.methods.approveRequest(0).send({
      from:accounts[2]
    });
    await fundraiser.methods.approveRequest(0).send({
      from:accounts[3]
    });
    await fundraiser.methods.approveRequest(0).send({
      from:accounts[4]
    });
    await fundraiser.methods.finalizeRequest(0).send({
      from:accounts[0],
    });
    const afterBalance = await web3.eth.getBalance(accounts[1]);
    const difference = afterBalance - beforeBalance;
    assert(difference == web3.utils.toWei('0.02', 'ether'));
  });

  it('Does not allow to finalize request by anyone else than manager',async ()=>{
    await fundraiser.methods.createRequest(
      'Description',
      '100',
      accounts[1]
    ).send({
      from: accounts[0],
      gas: '5000000'
    });
    const beforeBalance = await web3.eth.getBalance(accounts[1]);
    //Account 1
    await fundraiser.methods.contribute().send({
        from: accounts[2],
        value: '101'
      });
    //Account 2
    await fundraiser.methods.contribute().send({
        from: accounts[3],
        value: '101'
      });
    //account 3
    await fundraiser.methods.contribute().send({
        from: accounts[4],
        value: '101'
      });
    await fundraiser.methods.approveRequest(0).send({
      from:accounts[2]
    });
    await fundraiser.methods.approveRequest(0).send({
      from:accounts[3]
    });
    await fundraiser.methods.approveRequest(0).send({
      from:accounts[4]
    });
    try{
    await fundraiser.methods.finalizeRequest(0).send({
      from:accounts[5],
    });
    assert(false);
  }catch(error){
    assert(error);
  }
  });

  it('Does not allow to approve a request anyone else than contributor',async ()=>{
    await fundraiser.methods.createRequest(
      'Description',
      '100',
      accounts[1]
    ).send({
      from: accounts[0],
      gas: '5000000'
    });
    const beforeBalance = await web3.eth.getBalance(accounts[1]);
    //Account 1
    await fundraiser.methods.contribute().send({
        from: accounts[2],
        value: '101'
      });
    //Account 2
    await fundraiser.methods.contribute().send({
        from: accounts[3],
        value: '101'
      });
    //account 3
    await fundraiser.methods.contribute().send({
        from: accounts[4],
        value: '101'
      });
    try{
    await fundraiser.methods.approveRequest(0).send({
      from:accounts[5]
    });
    assert(false);
  }catch(error){
    assert(error);
  }
  });



})
