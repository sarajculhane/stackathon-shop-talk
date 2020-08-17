import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import StockSelector from './StockSelector'

const StockPage = (props) => {


    return (
        <div>
        <Card bg='primary'>
          <Card.Body>
          <i class="fa-money fa"></i>


          <Card.Title>Your watched stocks</Card.Title>
          <Card.Text>
            <StockSelector />
          </Card.Text>
        </Card.Body>
</Card>
    </div>

    )
}

export default StockPage