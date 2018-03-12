import React, { Component } from "react";
import { Form, Input, Message, Button } from "semantic-ui-react";
import Fundraiser from "../ethereum/fundraiser";
import web3 from "../ethereum/web3";
import {Router} from '../routes'
// TODO form validation
class ContributeForm extends Component {
  state = {
    value: "",
    errorMsg: "",
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true, errorMsg: "" });
    const fundraiser = Fundraiser(this.props.address);
    try {
      const accounts = await web3.eth.getAccounts();
      await fundraiser.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, "ether")
      });
      Router.replaceRoute(`/fundraisers/${this.props.address}`);
    } catch (err) {
      this.setState({ errorMsg: err.message });
    }
    this.setState({ loading: false, value: '' });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMsg}>
        <Form.Field>
          <label>Amount to contribute</label>
          <Input
            value={this.state.value}
            onChange={event => this.setState({ value: event.target.value })}
            label="ether"
            labelPosition="right"
          />
        </Form.Field>
        <Message error header="Oops!" content={this.state.errorMsg} />
        <Button loading={this.state.loading} primary>
          Contribute!
        </Button>
      </Form>
    );
  }
}

export default ContributeForm;
