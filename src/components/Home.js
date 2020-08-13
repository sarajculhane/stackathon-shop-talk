import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Login from './Login'
import SignUp from './SignUp'

const Home = () => {
    return (
        <div className='home-split'>
    <Container fluid>
    <Row>
      <Col><Login /></Col>
      <Col><SignUp /></Col>
    </Row>
    
  </Container>
  </div>)
}

export default Home