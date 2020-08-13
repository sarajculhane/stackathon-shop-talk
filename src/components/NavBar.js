import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'


const NavBar = () => {
    return (
        // <div>
        // <Link to="/home">Home </Link>
        // <Link to="/login">Login </Link>
        // <Link to="/sign">Sign Up</Link>
        // </div>

   <Navbar bg="primary" expand="lg">
  <Navbar.Brand href="#home">ShopTalk
  <i className="fa fa-stack-exchange" aria-hidden="true"></i>
</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export const Jumbo = () => {
    return (
<div>
<Jumbotron fluid>
  <h1>Welcome to Shop Talk</h1>
  <p>
    You must login or create an account to access our site
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>
</div>
    )
}

export default NavBar