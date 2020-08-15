import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Test= (props) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const {username} =user
    console.log(user)
    return (
        <div>
            <Button>LOL {username}</Button>
    </div>

    )
}

export default Test