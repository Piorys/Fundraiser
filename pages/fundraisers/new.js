import React, { Component } from "react";
import Layout from "../../components/layout";
import { Button, Form, Input, Message } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import {Router} from "../../routes";

//TODO:
// => WEI - ETH converter
// => Form validation

class FundraiserNew extends Component {
  state = {
    minumumContribution: "",
    errorMsg: "",
    loading: false
  };

  onSubmit = async event => {
    //Prevent browser of submitting the form automatically
    event.preventDefault();

    this.setState({loading: true, errorMsg: ''});

    try {
      //Get the accounts from Metamask
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createFundraiser(this.state.minumumContribution)
        .send({
          from: accounts[0]
        });

      Router.pushRoute('/');
      
    } catch (error) {
      this.setState({ errorMsg: error.message });
      console.log('Error was thrown, detailed description below:')
      console.error(error);
    }
    this.setState({loading: false});
  };

  render() {
    return (
      <Layout>
        <h3>Create a new fundraiser</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMsg}>
          <Form.Field>
            <label>Minimum contribution</label>
            <Input
              label="Wei"
              labelPosition="right"
              placeholder="Minimum contribution value"
              value={this.state.minumumContribution}
              onChange={event =>
                this.setState({ minumumContribution: event.target.value })
              }
            />
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMsg} />
          <Button loading={this.state.loading} primary>Create!</Button>
        </Form>
      </Layout>
    );
  }
}
export default FundraiserNew;
