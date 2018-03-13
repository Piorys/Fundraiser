import React, { Component } from "react";
import Layout from "../../../components/layout";
import { Button, Form, Input, Message } from "semantic-ui-react";
import web3 from "../../../ethereum/web3";
import Fundraiser from "../../../ethereum/fundraiser";
import { Link, Router } from "../../../routes";

class RequestNew extends Component {
  state = {
    description: "",
    value: "",
    errorMsg: "",
    reciepent: "",
    loading: false
  };

  static async getInitialProps(props) {
    const { address } = props.query;
    return { address };
  }

  onSubmit = async event => {
    //Prevent browser of submitting the form automatically
    event.preventDefault();

    this.setState({ loading: true, errorMsg: "" });

    try {
      const fundraiser = Fundraiser(this.props.address);
      const accounts = await web3.eth.getAccounts();
      await fundraiser.methods
        .createRequest(
          this.state.description,
          web3.utils.toWei(this.state.value, "ether"),
          this.state.reciepient
        )
        .send({
          from: accounts[0]
        });
      Router.pushRoute();
    } catch (error) {
      this.setState({ errorMsg: error.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3>Create a Request</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMsg}>
          <Form.Field>
            <label>Description</label>
            <Input
              placeholder="Short Description of desired request"
              value={this.state.description}
              onChange={event =>
                this.setState({ description: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Amount in Ether</label>
            <Input
              label="ETH"
              labelPosition="right"
              placeholder="How much Ether"
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Reciepent</label>
            <Input
              placeholder="Address of reciepent"
              value={this.state.reciepent}
              onChange={event =>
                this.setState({ reciepent: event.target.value })
              }
            />
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMsg} />
          <Link route={`/fundraisers/${this.props.address}/requests`}>
            <a>
              <Button
                content="Back"
                icon="left arrow"
                labelPosition="left"
                primary
              />
            </a>
          </Link>
          <Button
            content="Create!"
            icon="plus"
            labelPosition="right"
            loading={this.state.loading}
            primary
          />
        </Form>
      </Layout>
    );
  }
}

export default RequestNew;
