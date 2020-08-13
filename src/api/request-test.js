
// Ex: Send a request for today's prices for from facebook

var request = require('request');
var requestOptions = {
    'url': 'https://api.tiingo.com/tiingo/daily/fb/prices?token=0189de0f22a949c42d1782d8f86b0fc70a5465f2',
    'headers': {
        'Content-Type': 'application/json'
        }
};

request(requestOptions,
    function(error, response, body) {
        console.log(body);
    }
);  


// var request = require('request');
// var requestOptions = {
//         'url': 'https://api.tiingo.com/api/test?token=0189de0f22a949c42d1782d8f86b0fc70a5465f2',
//         'headers': {
//             'Content-Type': 'application/json'
//             }
//         };

// request(requestOptions,
//         function(error, response, body) {
//             console.log(body);
//         }
// );        

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