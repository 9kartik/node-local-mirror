var fetch = require('node-fetch');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get( '/*',function(req, res){
  res.send(req.url+'hello world');
});

app.post('/*',function (request, response) {
    console.log(JSON.stringify(request.body))

    fetch(`https://qa2.cleartrip.com${request.url}`, { method: 'POST', body: JSON.stringify(request.body) ,headers: { 'Content-Type': 'application/json' }})
    .then(res => res.json())
    .then(json => {
        response.send(json);
        response.end()
        });
});

app.listen(8080);
console.log('Server started! Mirroring post requests on qa2' + 8080);
