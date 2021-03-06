import React from 'react'

import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store/auth'
import Button from 'react-bootstrap'

const Logout = ({handleClick, isLoggedIn}) => {
    return (
        <div>
            <Button onClick={handleClick}>Logout</Button>
        </div>
    )
}

const mapState = state => {
    return {
      isLoggedIn: !!state.currentUser.id
    }
  }
  
  const mapDispatch = dispatch => {
    return {
      handleClick() {
        dispatch(logout())
      }
    }
  }
  
  export default connect(mapState, mapDispatch)(Logout)