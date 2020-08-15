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

    
    const [selectedStocks, setStocks] = useState(JSON.parse(localStorage.getItem('stock'))|| [])
    localStorage.setItem('stock', JSON.stringify(selectedStocks))


    const [submitted, setSubmitted] = useState(false)
//    setStocks([...fakeStocks])
    const handleSubmit = (evt) => {
        evt.preventDefault()
        const stock = evt.target.stock.value
        if(selectedStocks.includes(stock)) {
            console.log('duplicate')
            return <div>Already added</div>
        }
        else{
            setStocks([...selectedStocks, stock])
            setSubmitted(true)
            localStorage.setItem('stock', JSON.stringify(selectedStocks))
        }

        
    }

    const updateUser = () => {
        if(JSON.parse(localStorage.getItem('user'))) {
            let user = JSON.parse(localStorage.getItem('user'))

            user.stocksWatched = selectedStocks
            localStorage.setItem('user', JSON.stringify(user))
            return user
        }
    }

    const renderStockInfo = () => {
        if(updateUser()) {

        
        const userStocks = updateUser().stocksWatched
        const stockArr = []
        userStocks.forEach((stock, idx) => {

                if(fakeStocks[idx] && stock === fakeStocks[idx].symbol) stockArr.push(fakeStocks[idx])
        })
        if(selectedStocks.length || stockArr.length) {
            return (
        stockArr.map((stock, idx) => <div key={idx}>{stock.symbol} {stock.company}</div>
            ))
        } else  {
            return <div>No Stocks</div>
        }


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
    {/* {JSON.parse(localStorage.getItem('stock'))  && renderStockInfo()} */}
    {renderStockInfo()}
        </div>
    )
}


export default StockSelector
