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

  it('',()=>{

  });

})
