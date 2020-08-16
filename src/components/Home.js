import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Login from './Login'
import SignUp from './SignUp'
import StockTest from './StockTest'
import {Jumbo} from './NavBar'
const Home = () => {
    return (
        <div className='home-split'>
    <Container fluid>
    <Jumbo />
    <Row>

    </Row>
    <Row className="justify-content-md-center">
      <div id='sessions' >
      <Col><Login /></Col>
      <Col><SignUp /></Col>
      </div>
    </Row>

    
  </Container>
  </div>)
}

export default Home