import React, {Component} from 'react';
import factory from '../ethereum/factory';
import {Card, Button} from 'semantic-ui-react';

class fundraiserIndex extends Component{

  static async getInitialProps(){
    const fundraisers = await factory.methods.getFundraisers().call();
    return { fundraisers };
  }

  renderFundraisers(){
    const items = this.props.fundraisers.map(address=>{
      return {
        header: address,
        description: <a>View Fundraiser</a>,
        fluid: true
      };
    });

    return <Card.Group items={items}/>;

  }
  render(){
    return <div>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
    {this.renderFundraisers()}
    <Button
    content='add new fundraiser'
    icon='add circle'
    primary
    />
    </div>;

  }
}

export default fundraiserIndex;
