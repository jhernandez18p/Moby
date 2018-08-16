// Main CONF.
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');
const path = require('path');
const routes = require('./conf/routes');
const router = express.Router();

// CONF.
require('dotenv').config();
const server = process.env.NODE_ENV || 'test';
const port = parseInt(process.env.PORT || 9000);
const secretKey = (process.env.JWT_SECRET_KEY || "secretKey");
const nodeRestApi = (process.env.JWT_NODE_REST_API || "nodeRestApi");

// APP CONF.
routes(router);
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.use('/api/v2/',router);
app.disable('x-powered-by');

app.get('/api/v2/checking', function(req, res){
  res.json({
    "Tutorial": "Welcome to the APi"
  });
});


// React App
if (server === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
  app.get('/service-worker.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'service-worker.js'));
  });
}

app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.use(function (err, req, res, next) {
  console.log(err);
  if (err.status === 404)
  res.status(404).json({ message: "No encontrado" });
  else
  res.status(500).json({ message: "Algo va mal :( !!!" });
});


// RUN.
app.listen(port, () => {
  console.log(`Servidor inició en el puerto: ${port}`);
});
