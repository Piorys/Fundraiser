import React, { Component } from "react";
import factory from "../ethereum/factory";
import { Card, Button } from "semantic-ui-react";
import Layout from "../components/layout";

class FundraiserIndex extends Component {
  static async getInitialProps() {
    const fundraisers = await factory.methods.getFundraisers().call();
    return { fundraisers };
  }

  renderFundraisers() {
    const items = this.props.fundraisers.map(address => {
      return {
        header: address,
        description: <a>View Fundraiser</a>,
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }
  render() {
    return(
    <Layout>
      <div>
        <h3> Open Fundraisers </h3>
        <Button floated="right" content="add new fundraiser" icon="add circle" primary />
        {this.renderFundraisers()}
      </div>
    </Layout>
  );
  }
}

export default FundraiserIndex;
