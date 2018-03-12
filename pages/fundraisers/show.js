import React, { Component } from "react";
import Layout from "../../components/layout";
import Fundraiser from "../../ethereum/fundraiser";
import { Card, Grid } from "semantic-ui-react";
import web3 from '../../ethereum/web3'
import ContributeForm from '../../components/ContributeForm';

class FundraiserShow extends Component {
  static async getInitialProps(props) {
    const fundraiser = Fundraiser(props.query.address);
    const summary = await fundraiser.methods.getSummary().call();

    return {
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;

    const items = [
      {
        header: manager,
        meta: "Fundraiser is being managed by",
        description:
          "The manager created this campaign and can create requests to withdraw money",
        style: { overflowWrap: "break-word" }
      },
      {
        header: web3.utils.fromWei(balance,'ether') + " ETH",
        meta: "Current Balance",
        description: "The amount ether currently in the pool of Fundraiser",
        style: { overflowWrap: "break-word" }
      },
      {
        header:  minimumContribution + " WEI",
        meta: "Minimum Contribution",
        description:
          "The minimum amount needed to contribute to Fundraiser",
        style: { overflowWrap: "break-word" }
      },
      {
        header: requestsCount,
        meta: "Requests",
        description: "How many requests have been created",
        style: { overflowWrap: "break-word" }
      },
      {
        header: approversCount,
        meta: "Contributors",
        description: "How many people have contributed and earned the right to approve requests",
        style: { overflowWrap: "break-word" }
      }
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Fundraiser</h3>
        <Grid>
          <Grid.Column width={10}>
            {this.renderCards()}
          </Grid.Column>
          <Grid.Column width={6}>
            <ContributeForm/>
          </Grid.Column>
        </Grid>

      </Layout>
    );
  }
}

export default FundraiserShow;
