import React from 'react'
import {Route,Switch ,Link} from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'


const Routes = () => {
    return (
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
 
        </Switch>
    )
}

export default Routes