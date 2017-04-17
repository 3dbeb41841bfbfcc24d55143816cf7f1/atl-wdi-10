var mongoose = require('mongoose');
var Criminal = require('../models/Criminal.js');

mongoose.Promise = global.Promise;

var db = mongoose.connect('mongodb://localhost:27017/criminals-app');

var criminals = [
  { name: 'Gerry', crime:'Arson' },
  { name: 'Danny', crime:'Comfy Violation' },
  { name: 'Ray', crime: 'Lasagna Theft' },
  { name: 'Harry', crime: 'Too Much BBQ' },
  { name: 'Pookie', crime: 'Failure To Report' },
  { name: 'Kush', crime: 'Purp' },
  { name: 'Rush', crime: 'Damn!' },
  { name: 'Ashley', crime: 'Kidnapping Pokemon' },
  { name: 'Liam', crime: 'Scope Creep' },
  { name: 'Ryan', crime: 'Trolling The Class' },
  { name: 'Erin', crime: 'Counterfeit Backpacks' },
  { name: 'Matt', crime: 'Copying Off Aylin' },
  { name: 'Michael', crime: 'Drunk In Public' },
  { name: 'Brandon', crime: 'Illegal Concert Footage' },
  { name: 'Randy', crime: 'Poop' },
  { name: 'Julian', crime: 'Golfing While Intoxicated' },
];

Criminal.remove({})
  .then(function(){
    return Criminal.create(criminals);
  })
  .then(function(criminals){
    console.log(criminals);
  })
  .then(function(){
    mongoose.connection.close(function () {
      console.log('Mongoose connection disconnected');
    });
  });
