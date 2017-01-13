// Standard stuff
var express = require('express');
var bodyParser = require('body-parser');
var hbs = require('hbs');
var app = express();


app.set("view engine", "hbs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// SETTING UP Express Router
var usersController = require("./controllers/users.js");
app.use('/users', usersController);

// Mongoose stuff
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/family-tree');

// Now that we're connected, let's save that connection to the database in a variable.
var db = mongoose.connection;

// Will log an error if db can't connect to MongoDB
db.on('error', function(err){
  console.log(err);
});

// Will log "database has been connected" if it successfully connects.
db.once('open', function() {
  console.log("database has been connected!");
});

app.listen(4000, function(){
  console.log("app listening on port 4000");
});
