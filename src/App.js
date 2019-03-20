import React, { Component } from 'react';

import { Container } from 'rbx';

import Header from './Header/header'
import Content from './Content/content'

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
