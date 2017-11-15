'use strict';

import React from 'react';

import { Button } from 'antd';

import { connect } from 'react-redux';
import { test } from '../../redux/actions/test'

class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { count } = this.props;

        return (
          <div style={{ margin: 100 }}>
            <Button onClick={ this.increase }>  +  </Button>
            <span style={{ margin: 10, fontSize: 20 }}>{count}</span>
            <Button onClick={ this.decrease }>  -  </Button>
          </div>
        );
    }

    increase = () => {
        console.log('increase');
        this.props.dispatch(test.increase());
    }

    decrease = () => {
        console.log('decrease');
        this.props.dispatch(test.decrease());
    }
}

function select(store) {
    return {
        count: store.test.count
    }
}

export default connect(select)(Test);
