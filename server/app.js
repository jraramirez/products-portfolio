'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var setRoutes = require('./config/router');

var app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(setRoutes(express.Router()));
app.use(express.static('./client'));



var server = app.listen(3000, function() {
	console.log('App running at port 3000');

});
