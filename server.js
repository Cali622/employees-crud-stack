const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const port = 3000;

const { mongoose } = require('./db');
var employeeController = require('./db/controllers/employeeController');

var app = express();

// Parse data to json and connect to URI
app.use(bodyParser.json({useNewUrlParser: true}));
app.use(cors({ origin: 'https://employees-crud-stack.herokuapp.com' }));

// Serve static files
app.use(express.static(__dirname + '/dist/AngularApp'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/AngularApp/index.html'));
});

// default Heroku port
app.listen(process.env.PORT, () => console.log(`Server listening on port ${port}!`));

app.use('/db/controllers/employeeController', employeeController);