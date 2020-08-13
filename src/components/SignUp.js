import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const SignUp = () => {
    return <div>
        <Card >
  <Card.Body>
    <Card.Title>New User?</Card.Title>
    <Card.Text>
      Sign up to start talking!
    </Card.Text>
    <Button variant="outline-primary">Sign Up</Button>
  </Card.Body>
</Card>
    </div>
}

export default SignUp