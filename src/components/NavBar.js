import React from 'react'
import {Link} from 'react-router-dom'
import SignUp from './SignUp'

const NavBar = () => {
    return (
        <div>
        <Link to="/home">Home </Link>
        <Link to="/login">Login </Link>
        <Link to="/signup">Sign Up</Link>
        </div>
    )
}

export default NavBar