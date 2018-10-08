import React from 'react'
import {HashRouter , Route , Switch} from 'react-router-dom'
import App from './App'
import Admin from './Admin'
import Login from './pages/login'
import Button from './pages/ui/buttons'
import NoMatch from './pages/nomatch'
export default class IRouter extends React.Component{
    render(){
        return(
            <HashRouter>
                <App>
                    <Route path="/login" component={Login} />
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Route path="/admin/ui/buttons" component={Button}/>
                        </Admin>
                    } />
                    <Route path="/order/detail" component={Login} />
                    <Route  component={NoMatch} />

                </App>
            </HashRouter>
        )
    }
}