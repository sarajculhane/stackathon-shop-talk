import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Logout from './Logout'
import StockPage from './StockPage'
import {Alert, Container, Jumbotron} from 'react-bootstrap'
const UserHome = (props) => {
    if(props.user) {
        const {username} = props.user
        console.log(username, 'the username')

        return(
            <div>
        <div>
        {/* <Jumbotron fluid >
        <Container >
    <h1>Welcome back {username.toUpperCase()} ! </h1>
    <p>
            View and add stocks to your watchlist below
    </p>
  </Container>
</Jumbotron> */}

<Alert variant="primary">

  <Alert.Heading>
  <i class="fa-money fa"></i>
  <br />
      Welcome back {username ? username.toUpperCase() : null}
  </Alert.Heading>
  <hr />
  <p>
  View and add stocks to your watchlist below
  </p>

</Alert>
</div>
        
        <StockPage />

        <br />
        <Logout />
        </div>
        )

        


        
    } else {
       
        return(
            <div>
                <Alert variant="primary">
  <Alert.Heading> Hi Guest </Alert.Heading>
  <hr />
  <p>
  <a href='/'> Return to the homepage to sign up </a>
  </p>

</Alert>
    
            </div>

            )
    
    }
     
}

const welcomeHome = () => {
    return (
<Jumbotron fluid>
  <Container>
    <h1>Fluid jumbotron</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>
    )
}

export default UserHome