var express = require('express');
var app = express();
var morgan = require('morgan');

app.use(morgan('dev'));

app.get('/api', (req, res) => {
  res.json({message: 'Welcome to the Server'});
});

app.listen(8081, () => {
  console.log('API listening on port 8081');
});