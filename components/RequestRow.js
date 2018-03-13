import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Fundraiser from "../ethereum/fundraiser";

class RequestRow extends Component {
  onApprove = async () => {
    const fundraiser = Fundraiser(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await fundraiser.methods.approveRequest(this.props.id).send({
      from: accounts[0]
    });
  };

  onFinalize = async () => {
    const fundraiser = Fundraiser(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await fundraiser.methods.finalizeRequest(this.props.id).send({
      from: accounts[0]
    });
  };
  render() {
    const { Row, Cell } = Table;
    const { id, request, approvers } = this.props;
    const ready = request.approvalCount > approvers/2;

    return (
      <Row disabled={request.complete} positive={ready && !request.complete}>
        <Cell>{id}</Cell>
        <Cell>{request.description}</Cell>
        <Cell>{web3.utils.fromWei(request.value, "ether")}</Cell>
        <Cell>{request.recipient}</Cell>
        <Cell>
          {request.approvalCount} / {approvers}
        </Cell>
        <Cell>
          {request.complete ? null : (
            <Button color="green" basic onClick={this.onApprove}>
              Approve!
            </Button>
          )}
        </Cell>
        <Cell>
          {request.complete ? null : (
            <Button color="teal" basic onClick={this.onFinalize}>
              Finalize!
            </Button>
          )}
        </Cell>
      </Row>
    );
  }
}

export default RequestRow;
