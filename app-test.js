const  log = require('electron-log');
log.transports.console.level = 'info';
log.transports.file.level = 'info';

var express = require('express');
var router = express.Router();
const request = require('request')

const requestOptions = {
    'url': 'https://api.tiingo.com/api/test?token=0189de0f22a949c42d1782d8f86b0fc70a5465f2',
    'headers': {
        'Content-Type': 'application/json'
        }
    };

/* GET home page. */
router.get('/', async (req, res) => {
    await request(requestOptions, function (error, res, body){
      if(!error && response.statusCode === 200){
        res.json(body);
      }
});

module.exports = router;