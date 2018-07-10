const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();
const port = 9000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/build')));

// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: articles });
});
app.get('/api/checking', function(req, res){
  res.json({
    "Tutorial": "Welcome to the Node express JWT Tutorial"
  });
});
if (process.env.NODE_ENV === 'production') {
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
  app.get('/service-worker.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'service-worker.js'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
