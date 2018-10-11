
import React from 'react'
import { Card, Button, Icon, Modal } from "antd";
export default class Modals extends React.Component{
    state={
        showModa1:false,
        showModa2:false,
        showModa3:false,
        showModa4:false
    }
    handleOpen = (type) =>{
        // 根据不同的按钮显示不同的弹框，正常会写成下面这样
        // 不过这种方法比较笨还可以用另外一种写法
        // if(type == showModal1){
        //     this.setState({showModal1:true})
        // }
        // if(type == showModal2){
        //     this.setState({showModal2:true})
        // }
        // if(type == showModal3){
        //     this.setState({showModal3:true})
        // }
        // if(type == showModal4){
        //     this.setState({showModal4:true})
        // }

        // 高大上的写法如下
        this.setState({[type]:true})
    }
    render(){
        return(
            <div>
                <Card title="基础模态框">
                    <Button onClick={()=>this.handleOpen('showModa1')}>Open</Button>
                    <Button onClick={()=>this.handleOpen('showModa2')}>自定义页脚</Button>
                    <Button onClick={()=>this.handleOpen('showModa3')}>顶部20px弹框</Button>
                    <Button onClick={()=>this.handleOpen('showModa4')}>水平垂直居中</Button>
                </Card>
                <Modal
                    title="React"
                    visible={this.state.showModa1}
                    onCancel={()=>{
                        this.setState({showModa1:false})
                    }}
                    onOk={()=>{
                        this.setState({showModa1:false})
                    }}
                >
                    <p>这是showModal</p>
                </Modal>
                <Modal
                    title="showModa2带有页脚"
                    visible={this.state.showModa2}
                    onCancel={()=>{
                        this.setState({showModa2:false})
                    }}
                    onOk={()=>{
                        this.setState({showModa2:false})
                    }}
                    okText="好的"
                    cancelText="算了"
                >
                    <p>这是showModal</p>
                </Modal>
                <Modal
                    title="showModa32带有页脚"
                    visible={this.state.showModa3}
                    onCancel={()=>{
                        this.setState({showModa3:false})
                    }}
                    onOk={()=>{
                        this.setState({showModa3:false})
                    }}
                    style={{top:20}}
                    okText="好的"
                    cancelText="算了"
                >
                    <p>这是showModal</p>
                </Modal>
                <Modal
                    title="showModa4带有页脚"
                    visible={this.state.showModa4}
                    onCancel={()=>{
                        this.setState({showModa4:false})
                    }}
                    onOk={()=>{
                        this.setState({showModa4:false})
                    }}
                    wrapClassName="aaa"
                    okText="好的"
                    cancelText="算了"
                >
                    <p>这是showModal</p>
                </Modal>
            </div>
        )
    }
}