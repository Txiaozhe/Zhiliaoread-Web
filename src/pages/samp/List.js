/**
 * Creator: Tang Xiaoji
 * Time: 2018-01-06
 */

import React, {Component} from 'react';
import {Table} from 'antd';
import {Http} from '../../utils';
import {Url} from '../../config';
import _ from 'lodash';
import {Modal} from "antd/lib/index";

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name'
}, {
  title: '电话',
  dataIndex: 'phone',
  key: 'phone',
}, {
  title: '餐饮品牌',
  dataIndex: 'brand',
  key: 'brand',
}, {
  title: '经营餐厅年数',
  dataIndex: 'duration',
  key: 'duration',
}, {
  title: '地址（省市）',
  dataIndex: 'location',
  key: 'location',
}, {
  title: '"城店"预计面积',
  dataIndex: 'area',
  key: 'area',
}, {
  title: '计划开始时间',
  dataIndex: 'plan',
  key: 'plan',
}];

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.getList();
  }

  render() {
    return (
      <Table columns={columns} dataSource={this.state.data}/>
    );
  }

  getList = () => {
    const url = Url.host + Url.samp_list;
    Http.get(url, (res) => {
      this.setState({
        data:  _.remove(_.uniqBy(res.data, 'phone'), (ele) => ele.phone !== '1')
      });
    }, err => {
      console.log(err);
      Modal.error({
        title: '提示',
        content: '获取数据失败！',
      });
    });
  }
}

module.exports = List;
