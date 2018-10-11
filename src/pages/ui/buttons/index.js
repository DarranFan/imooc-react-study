import "./ui.less";

import React from "react";
import { Card, Button, Icon, Radio } from "antd";
const ButtonGroup = Button.Group;
const RadioGroup = Radio.Group;
// require ('./ui.less');
export default class IButton extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      size:'default'
    };
  }
  handCloseLoading = () => {
    this.setState({
      loading: false
    });
  }
  handleChange = (e) =>{
    this.setState({
        size:e.target.value
    })
  }
  render() {
    return (
      <div>
        <Card title="基础按钮">
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button disabled>Disabled</Button>
        </Card>
        <Card title="图形按钮">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button icon="search" shape="circle" />
          <Button icon="search" type="primary">
            搜索
          </Button>
          <Button icon="download" type="primary">
            下载
          </Button>
        </Card>
        <Card title="Loading按钮">
          <Button type="primary" loading={this.state.loading}>
            确定
          </Button>
          <Button type="primary" loading={this.state.loading} shape="circle" />
          <Button loading={this.state.loading}>点击加载</Button>
          <Button loading={this.state.loading} shape="circle" />
          <Button type="primary" onClick={this.handCloseLoading}>
            关闭
          </Button>
        </Card>
        <Card title="按钮组">
          <ButtonGroup>
            <Button type="primary">
              <Icon type="left" />
              Go back
            </Button>
            <Button type="primary">
              Go forward
              <Icon type="right" />
            </Button>
          </ButtonGroup>
        </Card>
        <Card title="按钮尺寸">
          <RadioGroup value={this.state.size} onChange={this.handleChange}>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </RadioGroup>
          <Button type="primary" size={this.state.size}>Primary</Button>
          <Button size={this.state.size}>Default</Button>
          <Button type="dashed" size={this.state.size}>Dashed</Button>
          <Button type="danger" size={this.state.size}>Danger</Button>
          <Button disabled size={this.state.size}>Disabled</Button>
        </Card>
      </div>
    );
  }
}
