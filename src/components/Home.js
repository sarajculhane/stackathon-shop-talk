import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-bootstrap'
import Login from './Login'
import SignUp from './Login'

const Home = () => {
    return (
    <Container fluid>
    <Row>
      <Col><Login /></Col>
      <Col><SignUp /></Col>
    </Row>
  </Container>)
}

export default Home