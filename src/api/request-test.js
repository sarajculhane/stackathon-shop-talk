
// Ex: Send a request for today's prices for from facebook
// const express = require('express')
// const router = express.Router();
// const request = require('request');


// const requestOptions = {
//     'url': 'https://api.tiingo.com/tiingo/daily/fb/prices?token=0189de0f22a949c42d1782d8f86b0fc70a5465f2',
//     'headers': {
//         'Content-Type': 'application/json'
//         }
// };
// request(requestOptions,
//     function(error, response, body) {
//         console.log(body, 'body')
//         console.log(response, 'response')
//     }
// );  

// router.get('/', function(req, res, next) {
//     request(requestOptions,
//         function(error, response, body) {
//             try{
//                 console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//                 JSON.parse(body)
//             } catch(err) {
//                 console.log(err)
//             }
//         })
//     })

var request = require('request');
var requestOptions = {
        'url': 'https://api.tiingo.com/api/test?token=0189de0f22a949c42d1782d8f86b0fc70a5465f2',
        'headers': {
            'Content-Type': 'application/json'
            }
        };

request(requestOptions,
        async function(error, response, body) {
            const data = await JSON.parse(body)
            console.log(data)
        }
);        


// var WebSocket = require('ws');
// var ws = new WebSocket('wss://api.tiingo.com/test');

// var subscribe = {
//         'eventName':'subscribe',
//         'eventData': {
//                         'authToken': '0189de0f22a949c42d1782d8f86b0fc70a5465f2'
//                     }
//         }
// ws.on('open', function open() {
//     ws.send(JSON.stringify(subscribe));
// });

// ws.on('message', function(data, flags) {
//     console.log(data)
// });