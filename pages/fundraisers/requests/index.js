import React, { Component } from "react";
import Layout from "../../../components/layout";
import ContributeForm from "../../../components/ContributeForm";
import { Card, Grid, Button } from "semantic-ui-react";
import { Link } from "../../../routes";

class RequestIndex extends Component {

  static async getInitialProps(props){
    const {address} = props.query
    return {address};
  }
  render() {
    return (
      <Layout>
        <h3> List of Requests </h3>
        <Link route={`/fundraisers/${this.props.address}/requests/new`}>
          <a>
            <Button primary >Add Request</Button>
          </a>
        </Link>
      </Layout>
    );
  }
}

export default RequestIndex;
