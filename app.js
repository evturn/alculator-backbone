var express = require('express');
var app = express();
var logger = require('./logger');

app.use(express.static('public'));


app.listen(3000, function() {
	console.log('Server running on localhost:3000 \n');
});