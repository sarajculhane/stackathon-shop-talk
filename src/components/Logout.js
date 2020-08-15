import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store/auth'
import Button from 'react-bootstrap/Button'

const Logout = (props) => {
    const {handleClick} = props
    return (
        <div>
            <Button onClick={handleClick}>Logout</Button>
            </div>
        
    )
}

const mapState = state => {
    return {
      isLoggedIn: !!state.currentUser
    }
  }
  
  const mapDispatch = dispatch => {
    return {
      handleClick() {
        dispatch(logout())
        localStorage.removeItem('user')
      }
    }
  }
  
  export default connect(mapState, mapDispatch)(Logout)