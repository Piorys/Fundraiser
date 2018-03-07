pragma solidity ^0.4.17;

contract FundraiserFactory {
    address[] deployedFundraisers;

    function createFundraiser(uint minimum) public {
        address newFundraiser = new Fundraiser(minimum, msg.sender);
        deployedFundraisers.push(newFundraiser);
    }

    function getFundraisers() public view returns(address[]){
        return deployedFundraisers;
    }
}


contract Fundraiser {

    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }

    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;

    modifier restricted(){
        require(msg.sender == manager);
        _;
    }

    function Fundraiser(uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;

    }

    function contribute() payable public {
        require(msg.value > minimumContribution);
        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequest(string description, uint value,address recipient)
        public restricted {
            /* require(approvers[msg.sender]); */
            Request memory newRequest = Request({
                description: description,
                value: value,
                recipient: recipient,
                complete: false,
                approvalCount: 0
            });
        requests.push(newRequest);
    }

    function approveRequest(uint requestIndex) public {
        Request storage request = requests[requestIndex];
        //Check if sender was a contributor
        require(approvers[msg.sender]);
        //Check if sender does not approved the request before
        require(!request.approvals[msg.sender]);
        //Increment approvals
        request.approvalCount++;
        //Prevent future approval on request
        request.approvals[msg.sender] = true;

    }

    function finalizeRequest(uint requestIndex) public restricted {
        Request storage request = requests[requestIndex];
        require(request.approvalCount > (approversCount/2));
        require(!request.complete);

        request.recipient.transfer(request.value);
        request.complete = true;
    }


}
