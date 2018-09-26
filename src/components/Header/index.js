import React from 'react';
import { Row, Col } from 'antd';

export default class Header extends React.Component{
    componentWillMount(){
        this.state = {
            userName:'青青河畔'
        }
    }
    render(){
        return(
            <div>
                <Row>
                    <Col span="24">
                        <span>欢迎,{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                    <Col></Col>
                </Row>
                <Row></Row>
            </div>
        )
    }
}