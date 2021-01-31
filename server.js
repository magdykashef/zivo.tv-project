const cors = require('cors');
const path = require('path');
const fs = require('fs');
const helmet = require('helmet');
const express = require('express');
const app = express();

const port = 9090;

const corsOptions = {
  origin: `https://localhost:${port}`,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));

app.use(helmet());

app.disable('x-powered-by');

app.set('trust proxy', 1); // trust first proxy

app.use(express.static(__dirname + '/zivo.tv'));

app.get('/*', function (req, res) {
  res.statusCode = 200;
  res.sendFile(__dirname + '/zivo.tv/index.html');
  res.end;
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
