import React, {useState, useEffect} from 'react'
import axios from 'axios'
import StockPage from './StockPage'

const StockTest = () => {

    const [stock, setStock] = useState({})
 
    useEffect(() => {
        const getQuote = async ()  => {
            try {
                const {data} = await axios.get( 'https://cloud.iexapis.com/stable/stock/aapl/quote?token=pk_da3237e3e732444cb0ddb0ff0ac806bf ', {
                    headers: {
                        'Content-Type': 'application/json',
    
                      }
                    })
                    setStock(data)
                    
            } catch(err) {
                console.log(err, 'this is an axios error')
            }
        }
      getQuote()}, [])

    return (
        <div>
            <StockPage stock={stock} />
        </div>
    )
    }

export default StockTest