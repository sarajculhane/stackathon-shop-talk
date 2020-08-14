import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const StockPage = (props) => {
    console.log(props)
    const {symbol, companyName, open, close} = props.stock
    return (
        <div>
        <Card bg='light'>
          <Card.Body>
          <Card.Title>Stock of the Day</Card.Title>
          <Card.Text>
          <div>
            <p>Stock Ticker: {symbol}</p>
            <p>Company: {companyName}</p>
            <p>Open: {open}</p>
            <p>Open: {close}</p>
        </div>
          </Card.Text>
        </Card.Body>
</Card>
    </div>

    )
}

export default StockPage