import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Login from './Login'
import SignUp from './SignUp'
import StockTest from './StockTest'

const Home = () => {
    return (
        <div className='home-split'>
    <Container fluid>
    <Row>
    <Col><StockTest /></Col>
    </Row>
    <Row>
      <Col><Login /></Col>
      <Col><SignUp /></Col>
    </Row>
    

    
  </Container>
  </div>)
}

export default Home