import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import UserHome from './UserHome'

const fakeStocks = [
    {
    symbol: 'ZM', company: 'ZOOM'

},
{symbol : 'APPL', company: 'Apple'},
{symbol : 'FB', company : 'facebook'}]

const StockSelector = () => {

    

    const [selectedStocks, setStocks] = useState([])
    const [submitted, setSubmitted] = useState(false)
//    setStocks([...fakeStocks])
    const handleSubmit = (evt) => {
        evt.preventDefault()
        const stock = evt.target.stock.value
        if(fakeStocks.filter((fake) => fake.symbol === stock))
        setStocks([...selectedStocks, stock])
        setSubmitted(true)
        localStorage.setItem('stock', JSON.stringify(selectedStocks))
        const localStock =JSON.parse(localStorage.getItem('user'))
        console.log(stock, selectedStocks)
        return <div>{localStock}</div>
    }

    const renderStockInfo = () => {
        if(selectedStocks.length > 0) {
            return (
        selectedStocks.map((stock => <div>{stock}</div>)))
        }


    }

    return (
        <div>
    <Form onSubmit={handleSubmit}>

        <Form.Group controlId="formBasicEmail">
        <Form.Label>Find Stock</Form.Label>
        <Form.Control type="text" name='stock' placeholder="Search for a stock" />

        </Form.Group>
        <Button variant="outline-primary" type="submit">
        Submit
        </Button>
    </Form>
    {submitted && renderStockInfo()}
        </div>
    )
}


export default StockSelector
