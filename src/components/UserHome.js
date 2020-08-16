import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Logout from './Logout'
import StockPage from './StockPage'
const UserHome = (props) => {
    if(props.user) {
        const {username} = props.user
        console.log(username, 'the username')

        return(
            <div>
        <div>WELCOME TO BACK {username}</div>
        <StockPage />

        
        <Logout />
        </div>
        )

        


        
    } else {
       
        return(
            <div>Hi Guest
    
            </div>

            )
    
    }
     
}

export default UserHome