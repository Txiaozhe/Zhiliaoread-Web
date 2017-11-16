/**
 * Creator: Tang Xiaoji
 * Time: 2017-11-15
 */

'use strict';

import React from 'react';

import {Button} from 'antd';
import {connect} from 'react-redux';

import {String} from '../../config';
import {Colors} from '../../styles'
import {Http} from '../../utils';
import {test} from '../../redux/actions/test'

class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {count} = this.props;

    return (
      <div style={{margin: 100}}>
        <h1>{String.Test}</h1>
        <Button onClick={this.increase}> + </Button>
        <span style={{margin: 10, fontSize: 20, color: Colors.red}}>{count}</span>
        <Button onClick={this.decrease}> - </Button>
      </div>
    );
  }

  async increase() {
    const res = await Http.get('http://127.0.0.1:3000');
    console.log(res);
    this.props.dispatch(test.increase());
  };

  decrease = () => {
    this.props.dispatch(test.decrease());
  }
}

function select(store) {
  return {
    count: store.test.count
  }
}

export default connect(select)(Test);
