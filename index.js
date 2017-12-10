/**
 * Creator: Tang Xiaoji
 * Time: 2017-11-15
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import store from './src/redux/store';
import {Provider} from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from './src/pages/home/Home';

const router = (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Home}/>
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
