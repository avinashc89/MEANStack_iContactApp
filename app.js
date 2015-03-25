var express = require('express');
var bodyParser = require('body-parser');

var mongojs = require('mongojs');
db = mongojs.connect('gavinashc89:mongodb1@ds043220.mongolab.com:43220/mymongo',["Contacts"]);


var routes = require('./routes/index');


var app = express();
app.use(express.static(__dirname+ '/public'));
app.use(bodyParser.json());

app.use('/',routes);


app.listen(3000);
console.log("Running from port 3000");

module.exports = app;
