import React from 'react';
import {Container, Row, Col, Form} from 'react-bootstrap'

const Notes = (props) => {
    const {stock} = props
    return (
      <Container>  <Form>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>{stock}</Form.Label>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label></Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
</Form>

</Container>
    )
}


export default Notes