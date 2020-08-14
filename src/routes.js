import React from 'react'
import {Route,Switch ,Link} from 'react-router-dom'
import Home from './components/Home'
import StockTest from './components/StockTest'


const Routes = () => {
    return (
        <Switch>
        <div>
            <Route exact path="/" component={Home} />
            {/* <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} /> */}
            <Route path='/stocks' component={StockTest} />
            </div>
       </Switch>
    )
}

export default Routes