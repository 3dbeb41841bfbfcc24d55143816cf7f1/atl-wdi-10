var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/world_bank_loan_app');

var db = mongoose.connection;

var csvdata = require('csvdata');

var Wbinfo = require('../models/wbinfo.js');

Wbinfo.remove({})
.then(function(){
  return csvdata.load('./scripts/example_data.csv');
})
.then(function(records){
  var recordPromisesArray = records.map(function(record){
    return Wbinfo.create(record);
  });
  return Promise.all(recordPromisesArray);
})
.then(function(records){
  console.log(`Database now contains ${records.length} records.`);
})
.catch(function(err){
  console.log("Hit an Error: ", err);
})
.then(function(){
  db.close();
});
