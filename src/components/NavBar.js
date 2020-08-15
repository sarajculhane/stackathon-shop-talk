import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav, Jumbotron, Button, Image} from 'react-bootstrap'



const NavBar = () => {
    return (
        // <div>
        // <Link to="/home">Home </Link>
        // <Link to="/login">Login </Link>
        // <Link to="/sign">Sign Up</Link>
        // </div>

   <Navbar bg="primary" expand="lg">
  <Navbar.Brand href="/">ShopTalk
  <i className="fa fa-stack-exchange" aria-hidden="true"></i>
</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/">Link</Nav.Link>
      <Nav.Link href="/test">Rand</Nav.Link>
      </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export const Jumbo = () => {
    return (
<div>
<Jumbotron fluid style={{ height: 350}} fluid>
  <h1>Welcome to Shop Talk</h1>
  <Image src="/bullsandbears.png" alt='bull' fluid style={{width: 200, height: 'auto'}}/>
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