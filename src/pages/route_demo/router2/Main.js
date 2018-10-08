import React from 'react'
import {Link} from 'react-router-dom'
export default class Main extends React.Component{
    render(){
        return(
            <div>
                Main
                <ul>
                    <li><Link to="/main/a">嵌套路由</Link></li>
                    <li><Link to="/main/b">嵌套路由bbbb</Link></li>
                </ul>
                <hr/>
                {this.props.children}
            </div>
        )
    }
}