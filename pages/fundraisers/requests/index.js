import React, { Component } from "react";
import Layout from "../../../components/layout";
import ContributeForm from "../../../components/ContributeForm";
import { Card, Grid, Button, Table } from "semantic-ui-react";
import { Link } from "../../../routes";
import Fundraiser from "../../../ethereum/fundraiser";
import RequestRow from "../../../components/RequestRow";

//TODO Show message when no requests were created

class RequestIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;

    const fundraiser = Fundraiser(address);
    const requestsCount = await fundraiser.methods.getRequestsCount().call();
    const approversCount = await fundraiser.methods.approversCount().call();
    const requests = await Promise.all(
      Array(parseInt(requestsCount))
        .fill()
        .map((element, index) => {
          return fundraiser.methods.requests(index).call();
        })
    );
    return { address, requests, requestsCount, approversCount };
  }

  renderRows() {
    return this.props.requests.map((request, index) => {
      return (
        <RequestRow
          key={index}
          id={index}
          request={request}
          address={this.props.address}
          approvers={this.props.approversCount}
        />
      );
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;

    return (
      <Layout>
        <h3> List of Requests </h3>
        <Link route={`/fundraisers/${this.props.address}`}>
          <a>
            <Button
              content="Back"
              icon="left arrow"
              labelPosition="left"
              primary
            />
          </a>
        </Link>
        <Link route={`/fundraisers/${this.props.address}/requests/new`}>
          <a>
            <Button
              content="Add Request"
              icon="plus"
              labelPosition="right"
              primary
            />
          </a>
        </Link>
        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Amount (ETH)</HeaderCell>
              <HeaderCell>Recipent</HeaderCell>
              <HeaderCell>Approvals</HeaderCell>
              <HeaderCell>Approve</HeaderCell>
              <HeaderCell>Finalize</HeaderCell>
            </Row>
          </Header>
          <Body>{this.renderRows()}</Body>
        </Table>
        <h4> Found {this.props.requestsCount} requests</h4>
      </Layout>
    );
  }
}

export default RequestIndex;
