/**
 * Creator: Tang Xiaoji
 * Time: 2017-11-16
 */

'use strict';

import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default connect()(App);
