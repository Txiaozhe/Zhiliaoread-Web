import React from 'react';

import './home.css';

import {Input} from 'antd';
import {Button} from 'antd';
import {Checkbox} from 'antd';

import Background from '../../../image/background.png';

const bg = {
  width: "100%",
  height: "400px",
  background: `url(${Background})`
};


export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='header' style={bg}>
        <h1 className="title"> 知了阅读</h1>
        <div className='login'>
          <div>
            <Input className="input" placeholder="用户名"/>
            <Input className="input" placeholder="密码"/>
            <Button>登录</Button>
          </div>
          <div className='password'>
            <Checkbox className="checkbox">记住密码</Checkbox>
            <a className='a'>忘记密码</a>
            <Button>注册</Button>
          </div>
        </div>
        <div id="headline">读书就是回家</div>
      </div>
    )
  }
}
