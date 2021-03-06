import React, {useEffect} from 'react'
import {Accordion ,Card, Button} from 'react-bootstrap'
import Notes from './Notes'

const StockAccordion = (props) => {
    const {stock, handleDelete} = props
    let date = new Date(stock.lastTradeTime)
    date = date.toLocaleString()
    console.log(date.toLocaleString(), 'this is the date')

    




    return (
   <Accordion variant='secondary'>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        {stock.symbol} - {stock.companyName}
        
      </Accordion.Toggle>
      <Button onClick={handleDelete}>Remove</Button>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body><div>
          <h5>{stock.companyName}</h5>
          <h6>Day's Range - Last trade time: {date} </h6>
          <p>High: {stock.high} Low : {stock.low}</p>
          <p> Change % {stock.changePercent}</p>

          <h6>52 Week </h6>
          <p>High: {stock.week52High} Low : {stock.week52Low}</p>

          <a href='/notes' > Notes </a>
          
          </div></Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
    )
}

export default StockAccordion