// Basic imports required for NodeJs
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
// Used for easy parsing of user-agent for response
var useragent = require('express-useragent');

// Create an instance of express for our app and instantiate bodyParser and cors
var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());

// API URL
var api = '/api/whoami';
app.get(api, function(req, res){
	var language = req.acceptsLanguages();
	var software = "OS: " + req.useragent.os + ", Browser: " + req.useragent.browser;
	var ipaddress = req.ip;

	res.json({
		'ipaddress': ipaddress,
		'software': software,
		'language': language[0],
	});
});

// start server
app.listen(3000, function(){
	console.log("Working");
});