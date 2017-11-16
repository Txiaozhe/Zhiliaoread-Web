/**
 * Creator: Tang Xiaoji
 * Time: 2017-11-15
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import './index.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import App from './src/pages/app/App';

const router = (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App}>
        {/* Route */}
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
