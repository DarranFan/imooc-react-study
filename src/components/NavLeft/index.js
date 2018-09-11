import React from "react";
import { Button } from "antd";
import MenuConfig from "../../config/menuconfig";
import './index.less'
import { Menu, Icon } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
const SubMenu = Menu.SubMenu;
export default class NavLeft extends React.Component {
    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuConfig)
        this.setState({menuTreeNode})
    }
    renderMenu = (data)=>{
        return data.map(v=>{
            if(v.children){
                return (
                    <SubMenu title={v.title} key={v.key}>
                        {this.renderMenu(v.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={v.title} key={v.key}>{v.title}</Menu.Item>
        })
    }
    render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>Imooc MS</h1>
        </div>
        <Menu theme="dark">   
          {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}
