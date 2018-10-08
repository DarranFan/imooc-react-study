import React from 'react'
// HashRouter  BrowserRouter
import {HashRouter as Router , Route ,Switch } from 'react-router-dom'
import Home from './Home'
import Main from './Main';
import About from '../route1/About';
import Topics from '../route1/Topics';
export default class IRouter extends React.Component{
    render(){
        return(
            <Router>
                <Home>
                    <Switch>
                        <Route path="/main" render={()=>
                            <Main>
                                <Route path="/main/a" component={About}></Route>
                                <Route path="/main/b" component={Topics}></Route>
                            </Main>
                        }></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topics" component={Topics}></Route>
                    </Switch>
                </Home>
            </Router>
        )
    }
}