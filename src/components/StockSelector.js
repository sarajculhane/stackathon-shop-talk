import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import StockTest from './StockTest'
import axios from 'axios'

const fakeStocks = [
    {
    symbol: 'ZM', company: 'ZOOM'

},
{symbol : 'APPL', company: 'Apple'},
{symbol : 'FB', company : 'facebook'}]

const StockSelector = () => {

    
    const [selectedStocks, setStocks] = useState(JSON.parse(localStorage.getItem('stock'))|| [])
    localStorage.setItem('stock', JSON.stringify(selectedStocks))
    const[stock, setStock] = useState({})
    const[didRun, setdidRun] = useState(false)


    const [submitted, setSubmitted] = useState(false)
    const [count, setCount] = useState(0)
    const handleSubmit = (evt) => {
        evt.preventDefault()
        const stock = evt.target.stock.value
        if(selectedStocks.includes(stock)) {
            console.log('duplicate')
            return <div>Already added</div>
        }
        else{
            
            setSubmitted(true)
            localStorage.setItem('stock', JSON.stringify(selectedStocks))
            setStock(stock)
            // setStocks([...selectedStocks, stock])

        }

        
    }
    

    useEffect(() => {
        setCount(0)
        if(submitted && count < 1) {
        const getQuote = async (ticker)  => {
            try {
                const {data} = await axios.get( `https://cloud.iexapis.com/stable/stock/${ticker}/quote?token=pk_da3237e3e732444cb0ddb0ff0ac806bf`, {

                    })
                    if (data) {
                        setStocks([...selectedStocks,data])
                        console.log(data, 'the data')
                    }
                        
            } catch(err) {
                console.log(err, 'this is an axios error')
            }
        }
        setCount(1)
    if(stock) {
      getQuote(stock)
      setdidRun(true)
    }
}
    }, [setStocks, selectedStocks, stock, submitted])

    const renderStockInfo = () => {
        if(updateUser()) {

        
        const userStocks = updateUser().stocksWatched
        const stockArr = []
        userStocks.forEach((stock, idx) => {
                if(stock) stockArr.push(stock)
        })
        if(selectedStocks.length || stockArr.length) {
            return (
        stockArr.map((stock, idx) => 
        <div key={idx}>
        <p>{stock.symbol}</p>
        <p>High: {stock.high} {stock.low}</p></div>
            ))
        } else  {
            return <div>No Stocks</div>
        }


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
        {renderStockInfo()}
        </div>
    )
}


export default StockSelector


