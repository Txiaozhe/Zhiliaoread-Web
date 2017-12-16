/**
 * Creator: Tang Xiaoji
 * Time: 2017-11-16
 */

'use strict';

import React from 'react';

import {
  Route
} from 'react-router-dom';

import Home from '../home/Home';
import Register from "../user/Register";
import {Provider} from 'react-redux';
import store from "../../redux/store";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/register" component={Register}/>
        </div>
      </Provider>
    );
  }
}

export default App;
