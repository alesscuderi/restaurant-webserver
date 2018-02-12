const express = require('express');
const bodyParser = require('body-parser');
const restaurantManager = require ('restaurant-manager-alesscuderi')

restaurantManager.populateLists();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var admin = require('./routes/admin');
var users = require('./routes/users');

app.use('/admin', admin);
app.use('/users', users);

var port = process.env.PORT||8000;
app.listen(port, function(){
  console.log('Server running on localhost:' + port);
});
module.exports = app;
