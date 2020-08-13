// import React from 'react'
// import axios from 'axios'

// export default class StockTest extends React.Component {
//     async componentDidMount() {
//         try {
//             const {data} = await axios.get( 'https://api.tiingo.com/api/test/ ', {
//                 headers: {
//                     "Access-Control-Allow-Origin": '*',
//                     "Access-Control-Allow-Methods": 'GET',
//                     'Content-Type': 'application/json',
//                     "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
//                     "Authorization": '0189de0f22a949c42d1782d8f86b0fc70a5465f2'
//                   }
//             })
//         } catch(err) {
//             console.log(err, 'this is an axios error')
//         }
//     }
//     render () {
//         return <div>{this.data}</div>
//     }
// }