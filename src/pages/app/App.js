/**
 * Creator: Tang Xiaoji
 * Time: 2017-11-16
 */

'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Home from '../home/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Home />
    );
  }
}

export default connect()(App);
