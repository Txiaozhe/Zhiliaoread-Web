/**
 * Creator: Tang Xiaoji
 * Time: 2018-01-03
 */

'use strict';

import React from 'react';
import {Layout, Input, Button, Modal} from 'antd';
import {connect} from 'react-redux';
import {Http} from '../../utils';
import {Url} from '../../config';

class Samp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: '',
      brand: '',
      duration: 0,
      location: '',
      area: 0.0,
      plan: ''
    }
  }

  render() {
    return (
      <Layout style={styles.container}>
        <img src="https://www.baidu.com/img/bd_logo1.png" />

        <Layout style={styles.space}>
          <span style={styles.tag}>姓名</span>
          <Input style={styles.input} onChange={(m) => this.setState({name: m.target.value})}/>
        </Layout>

        <Layout style={styles.space}>
          <span style={styles.tag}>电话</span>
          <Input type="tel" maxLength="11" style={styles.input} onChange={(m) => this.setState({phone: m.target.value})}/>
        </Layout>

        <Layout style={styles.space}>
          <span style={styles.tag}>餐饮品牌</span>
          <Input style={styles.input} onChange={(m) => this.setState({brand: m.target.value})}/>
        </Layout>

        <Layout style={styles.space}>
          <span style={styles.tag}>经营餐厅年数</span>
          <Input type="number" style={styles.input} onChange={(m) => this.setState({duration: m.target.value})}/>
        </Layout>

        <Layout style={styles.space}>
          <span style={styles.tag}>地址（省市）</span>
          <Input style={styles.input} onChange={(m) => this.setState({location: m.target.value})}/>
        </Layout>

        <Layout style={styles.space}>
          <span style={styles.tag}>“城店”预计面积</span>
          <Input type="number" style={styles.input} onChange={(m) => this.setState({area: m.target.value})}/>
        </Layout>

        <Layout style={styles.space}>
          <span style={styles.tag}>计划开始时间</span>
          <Input type="date" style={styles.input} onChange={(m) => this.setState({plan: m.target.value})}/>
        </Layout>

        <Button type="primary" style={styles.button} onClick={this.submit}>提交</Button>
      </Layout>
    );
  }

  submit = () => {
    const url = Url.host + Url.samp_register;
    for(let k in this.state) {
      if(!this.state[k]) {
        Modal.success({
          title: '警告',
          content: '请检查输入是否正确！',
        });
        return;
      }
    }

    Http.post(url, this.state, (res) => {
      if(res.code === 0) {
        Modal.success({
          title: '提示',
          content: '提交成功！',
        });
      }
    }, (e) => {
      console.log(e.toString());
      Modal.error({
        title: '提示',
        content: '出错啦，请联系管理员！',
      });
    })
  }
}

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  space: {
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  input: {
    marginTop: 30,
    marginLeft: 10,
    width: 500,
    height: 60,
    fontSize: 20
  },
  button: {
    marginTop: 30,
    width: 500,
    height: 60,
    fontSize: 20
  },
  desc: {
    marginTop: 20,
    height: 30,
    textAlign: 'center',
    fontSize: 20
  },
  tag: {
    marginTop: 30,
    width: 200,
    height: 60,
    textAlign: 'center',
    fontSize: 20
  }
};

export default connect()(Samp);

