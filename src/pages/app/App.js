/**
 * Creator: Tang Xiaoji
 * Time: 2017-11-16
 */

'use strict';

import React from 'react';
import {connect} from 'react-redux';

import Test from '../test/Test';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Test />
    );
  }
}

export default connect()(App);
