var cors = require('cors');
var path = require('path');
var fs = require('fs');
var helmet = require('helmet');
var express = require('express');
var app = express();

var port = 9090;

var corsOptions = {
  origin: 'https://localhost:' + port,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.use(helmet());

app.disable('x-powered-by');

app.set('trust proxy', 1); // trust first proxy

app.use(express.static(__dirname + '/zivo.tv'));

app.get('/*', function (req, res) {
  res.statusCode = 200;
  res.sendFile(__dirname + '/zivo.tv/index.html');
  res.end();
});

app.listen(port, function() {console.log('Listening on port: '+ port);});
