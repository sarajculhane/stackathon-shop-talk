import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {auth} from '../store/auth'
import {connect} from 'react-redux'

export class SignUpForm extends React.Component{

  constructor(props) {
    super(props)

  }

render() {return (
    <Form onSubmit={this.props.handleSubmit}>

    <Form.Group controlId="formBasicEmailTwo">
      <Form.Label>Username</Form.Label>
      <Form.Control type="text" name='username' placeholder="Enter username" />

    </Form.Group>

    <Form.Group controlId="formBasicPasswordOne">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" name='passwordsign' placeholder="Enter a password " />
    </Form.Group>
    {/* <Form.Group controlId="formBasicPasswordConf">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control type="password" name='passwordcomf' placeholder="Please retype Password" />
    </Form.Group> */}
    <Button variant="outline-primary"  type="submit">Sign Up</Button>
  </Form>
  )
}
}

const SignUp = (props) => {
  const {handleSubmit} = props
    return (
    <div>
        <Card style={{width: '18rem', height: '25rem'}}>
          <Card.Body>
          <Card.Title>New User?</Card.Title>
          <Card.Text>
            Sign up now to start talking shop!
          </Card.Text>
          <SignUpForm handleSubmit={handleSubmit}/>
        </Card.Body>
</Card>
    </div>)
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      try{ 
        evt.preventDefault()
        const username = evt.target.username.value
        const password = evt.target.passwordsign.value
        // const passwordComfirm = evt.target.passwordcomf.value
        // if(password === passwordComfirm) {
          dispatch(auth(username, password, 'signup'))
        // } else {
        //   return <div>Passwords must match</div>
        // }
      } catch(err) {
        console.log(err)
      }

    }
  }
}



export default connect(null, mapDispatch)(SignUp)