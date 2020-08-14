import React from 'react'
import {Route,Switch ,withRouter} from 'react-router-dom'
import Home from './components/Home'
import StockTest from './components/StockTest'
import UserHome from './components/UserHome'
import {me} from './store/auth'
import {connect} from 'react-redux'


class Routes extends React.Component {
    async componentDidMount() {
        await this.props.loadInitialData()
        console.log(this.props)
        const {isLoggedIn} = this.props
        if (isLoggedIn) {
          console.log('inside if')
        } else {
          console.log('no user logged in')
        }
      }
    
    render() {
        console.log(this.props, 'the props')
        return (
            
        <Switch>
        {this.props.isLoggedIn ?  <div><UserHome /></div> : 
                <div>
                <Route exact path="/" component={Home} />
                {/* <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} /> */}
                <Route path='/stocks' component={StockTest} />
                <Route path='/home' component={UserHome} />
                </div>}

           </Switch>

    )
}
}

const mapState = state => {
    return {

      isLoggedIn: !state.currentUser,
      user: state.currentUser
    }
  }
  
  const mapDispatch = dispatch => ({
    loadInitialData: () => {
      dispatch(me())
    }
  })
  
  // The `withRouter` wrapper makes sure that updates are not blocked
  // when the url changes
export default connect(mapState, mapDispatch)(Routes)