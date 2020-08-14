var express = require('express');
var request = require('request');
const app = require('./app')

var router = express.Router();

var requestOptions = {
    'url': 'https://api.tiingo.com/api/test?token=0189de0f22a949c42d1782d8f86b0fc70a5465f2',
    'headers': {
        'Content-Type': 'application/json'
        }
    };

router.route('/api')
  .get(function(req, res){
    request(requestOptions, function (error, response, body){
      if(!error && response.statusCode === 200){
        res.json(body);
      }
    })
  });

  app.get('/api', function(req, res){
    res.send('Welcome to my API');
  });

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