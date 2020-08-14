import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export const LoginForm = () => {
    return (
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Enter username" />

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
    <Card style={{width: '18rem', height: '20rem'}}>
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