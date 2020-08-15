import React from 'react'
import {Route,Switch ,withRouter} from 'react-router-dom'
import Home from './components/Home'
import StockTest from './components/StockTest'
import StockPage from './components/StockPage'
import UserHome from './components/UserHome'
import Test from './components/Test'
import {me} from './store/auth'
import {connect} from 'react-redux'


class Routes extends React.Component {
    async componentDidMount() {

        await this.props.loadInitialData()
        const isLoggedIn = JSON.parse(localStorage.getItem('user')) ? true :false
        if (isLoggedIn) {
          console.log('inside if')
        } else {
          console.log('no user logged in')
        }
      }
    
    render() {
        const isLoggedIn = JSON.parse(localStorage.getItem('user')) ? true :false
        const user = JSON.parse(localStorage.getItem('user')) 
        console.log(user)
        return (
            
        <Switch>
                {isLoggedIn ? (
                    <div>
                <Route exact path="/" component={() => <UserHome user={user}  />} />
                <Route exact path='/stocks' component={StockPage} />
                <Route exact path='/test' component={Test} />
                <Route exact path='/user/:id' component={() => <UserHome user={user}  />} />
                </div>
                ) :
            
                (
                <>
                <Route exact path="/" component={Home} />
                <Route exact path='/test' component={Test} />
                <Route exact path='/user/:id' component={() => <UserHome user={this.props.user}  />
            } />
            </>)
            }
           </Switch>

    )
}
}

const mapState = state => {
    return {

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