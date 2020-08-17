import React, {useState} from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap'

const Notes = (props) => {
    const stocks = JSON.parse(localStorage.getItem('user')).stocksWatched

    const [stock, setStock] = useState({})

    const handleChange = (evt) => {
        setStock(stocks.filter((stock) => stock.symbol === evt.target.value))
        
    }
    

    return (
        <div>
      <Container>  
          <Form>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Select a Stock</Form.Label>
    <Form.Control as="select" onChange={handleChange}>
      {stocks.map((stock, id) => <option id={id} name={stock.symbol}>{stock.symbol}</option>)}
      {console.log(stock, 'in')}
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label></Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
</Form>

<Button variant="primary" type="submit">
    Add Note
  </Button>
</Container>
<a href='/'>Back to Stock Page</a>
{console.log(stock, 'out')}

</div>

    )
}

export default Notes