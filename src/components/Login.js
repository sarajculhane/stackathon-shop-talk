import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export const LoginForm = () => {
    return (
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />

  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
  </Form.Group>
  <Button variant="outline-primary" type="submit">
    Submit
  </Button>
</Form>
    )
}

const Login = () => {
    return <div>
    <Card >
    <Card.Body>
    <Card.Title>Returning User?</Card.Title>
    <Card.Text>
        Please sign in below
    </Card.Text>
    <LoginForm />
    </Card.Body>
</Card>
</div>

}



export default Login