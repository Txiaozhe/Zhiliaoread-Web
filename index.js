import React from 'react';
import ReactDOM from 'react-dom';
import store from './src/redux/store';
import { Provider } from 'react-redux'
import './index.css';
import { Button } from 'antd';

import Test from './src/pages/test/test.page';

const router = (
  <Provider store={ store }>
    <Test />
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
