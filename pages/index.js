import React, { Component } from "react";
import factory from "../ethereum/factory";
import { Card, Button } from "semantic-ui-react";
import Layout from "../components/layout";
import {Link} from '../routes';

class FundraiserIndex extends Component {
  static async getInitialProps() {
    const fundraisers = await factory.methods.getFundraisers().call();
    return { fundraisers };
  }

  renderFundraisers() {
    const items = this.props.fundraisers.map(address => {
      return {
        header: address,
        description:(
          <Link route={`/fundraisers/${address}`}>
          <a>View Fundraiser</a>
          </Link>
        ),
        fluid: true
        //TODO Add a short description of a fundraiser
      };
    });
    return <Card.Group items={items} />;
  }
  render() {
    return(
    <Layout>
      <div>
        <h3> Open Fundraisers </h3>
        <Link route='/fundraisers/new'>
          <a className='item'>
            <Button floated="right" content="add new fundraiser" icon="add circle" primary />
          </a>
        </Link>
        {this.renderFundraisers()}
      </div>
    </Layout>
  );
  }
}

export default FundraiserIndex;
