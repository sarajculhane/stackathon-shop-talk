import React, {useState} from 'react';
import {Container, Row, Col, Form, Button, Alert} from 'react-bootstrap'

const Notes = (props) => {
    const stocks = JSON.parse(localStorage.getItem('user')).stocksWatched

    const [submitted, setSubmitted] = useState(false)
    const [notes, setNote] = useState(JSON.parse(localStorage.getItem('notes'))|| [])
    localStorage.setItem('notes', JSON.stringify(notes))
    const [stock, setStock] = useState({})
 
    const handleChange = (evt) => {
        
        setStock(stocks.filter((stock) => stock.symbol === evt.target.value))
        console.log(stock)
        
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        setNote([{stock: evt.target.text.value}])
        setSubmitted(true)
        localStorage.setItem('notes', JSON.stringify(notes))
        
        updateStock()
 
        
    }
    
    const updateStock = () => {
        if(JSON.parse(localStorage.getItem('stock'))) {
            let stocks = JSON.parse(localStorage.getItem('stock'))

            stocks.forEach((stock) => stock.notes = [])

        }
 }
    return (
        <div>
      <Container>  
          <Form onSubmit={handleSubmit}>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>
    <Alert variant="success">
  <Alert.Heading>Select a stock</Alert.Heading>
  <p>
        Leave a notes on your stocks 
  </p>
  <hr />
  <p className="mb-0">
      Track your stocks with thoughts  
  </p>
</Alert></Form.Label>
    <Form.Control as="select" onChange={handleChange}>
      {stocks.map((stock, id) => <option id={id} name={stock.symbol}>{stock.symbol}</option>)}
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label></Form.Label>
    <Form.Control as="textarea" name='text'rows="3" />
    
  </Form.Group>
  <Button type='submit' >Add Note</Button>
  
</Form>

</Container>
<a href='/'>Back to Stock Page</a>
{console.log(stock, 'out')}

</div>

    )
}

export default Notes