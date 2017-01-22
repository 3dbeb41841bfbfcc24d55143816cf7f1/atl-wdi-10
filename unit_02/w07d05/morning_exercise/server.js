//======================
// REQUIREMENTS
//======================
var express = require("express");
var app = express();
var mongoose = require("mongoose");


//======================
// CONTROLLERS
//======================
//to seed data in the database
var seedsController = require('./controllers/seed.js');
app.use('/seedvampire', seedsController);


//======================
// LISTENERS
//======================
mongoose.connect('mongodb://localhost:27017/vampire_hunt');

mongoose.connection.once('open', function(err, data){
	console.log("**Mongoose is CONNECTED**");
	app.listen(3000, function(req, res){
		console.log("***LISTENING***");
	});
});
