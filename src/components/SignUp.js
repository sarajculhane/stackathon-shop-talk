import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const SignUp = () => {
    return (
    <div>
        <Card style={{width: '18rem', height: '20rem'}}>
          <Card.Body>
          <Card.Title>New User?</Card.Title>
          <Card.Text>
            Sign up now to start talking shop!
            <p>
              Membership is free but beware of the bulls
            </p>
          </Card.Text>
          <Button variant="outline-primary">Sign Up</Button>
        </Card.Body>
</Card>
    </div>)
}

export default SignUp