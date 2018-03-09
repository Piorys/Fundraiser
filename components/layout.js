import React from 'react';
import Header from'./header';
import {Container} from 'semantic-ui-react';
import Head from "./Head"

export default props =>{
  return(
    <Container>
      <Head/>
      <Header/>
        {props.children}
    </Container>
  );
};
