import React, { Component } from 'react';

import { Container } from 'rbx';

import Header from './components/Header/Header'
import Content from './components/Content/Content'




class App extends Component {
  render() {
    return (
      <Container>
        <Header></Header>
        <Content></Content>
      </Container>
    );
  }




}



export default App;
