// Main CONF.
const proxy = require('http-proxy-middleware');
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

// APP CONF.
routes(router);
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.disable('x-powered-by');
// app.use('/api/v2/', proxy({
//   target: 'http://some-hosted-api-server.com',
// }));
app.use('^/api/v2/*', proxy('https://api.moby-group.com'));

// React App
if (server === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  // app.get('^/api/v2/$', function (req, res) { res.json({ "Tutorial": "Welcome to the APi" }); });
  app.get('*', function (req, res) { res.sendFile(path.join(__dirname, '../client/build', 'index.html')); });
  app.get('^/service-worker.js', (req, res) => { res.sendFile(path.resolve(__dirname, '../client/build', 'service-worker.js')); });
}

app.use(function (err, req, res, next) {
  if (err.status === 404)
    res.status(404).json({ message: "No encontrado" });
  else
    res.status(500).json({ message: "Algo va mal :( !!!" });
});

// RUN.
app.listen(port, () => { console.log(`Servidor inició en el puerto: ${port}`); });