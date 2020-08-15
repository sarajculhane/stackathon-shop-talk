import React from 'react'
import {Route,Switch ,withRouter} from 'react-router-dom'
import Home from './components/Home'
import StockTest from './components/StockTest'
import UserHome from './components/UserHome'
import Test from './components/Test'
import {me} from './store/auth'
import {connect} from 'react-redux'


class Routes extends React.Component {
    async componentDidMount() {
        await this.props.loadInitialData()
        const {isLoggedIn} = this.props
        if (isLoggedIn) {
          console.log('inside if')
        } else {
          console.log('no user logged in')
        }
      }
    
    render() {
        const {isLoggedIn} = this.props
        console.log(this.props, isLoggedIn, 'the props')
        return (
            
        <Switch>

                <Route exact path="/" component={Home} />
                {/* <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} /> */}
                <Route exact path='/stocks' component={StockTest} />
                <Route exact path='/test' component={Test} />
                <Route exact path='/user/:id' component={() => <UserHome user={this.props.user}  />} />
           </Switch>

    )
}
}

const mapState = state => {
    return {

      isLoggedIn: !!state.currentUser.id,
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
export default withRouter(connect(mapState, mapDispatch)(Routes))