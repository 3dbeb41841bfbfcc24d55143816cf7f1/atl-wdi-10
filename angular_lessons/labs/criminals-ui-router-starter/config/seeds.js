var mongoose = require('mongoose');
var Criminal = require('../models/Criminal.js');

mongoose.Promise = global.Promise;

var db = mongoose.connect('mongodb://localhost:27017/criminals-app');

var criminals = [
  { name: 'Maren', crime: 'Arson' },
  { name: 'Danny', crime: 'Comfy Violation' },
  { name: 'Jamie', crime: 'Newbie Ritual' },
  { name: 'Christy', crime: 'Baby Carriage Theft' },
  { name: 'William', crime: 'Nap Time Burglar' },
  { name: 'Pookie', crime: 'Failure To Report' },
  { name: 'Chris', crime: 'Vegan food crime' },
  { name: 'Kate', crime: 'Stole your Cheers' },
  { name: 'Ben', crime: 'Scope Creep' },
  { name: 'Yeni', crime: 'Counterfeit Macs' },
  { name: 'Jeff', crime: 'Battle Royale' },
  { name: 'Clark', crime: 'PB Sandwich Thief' }
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
