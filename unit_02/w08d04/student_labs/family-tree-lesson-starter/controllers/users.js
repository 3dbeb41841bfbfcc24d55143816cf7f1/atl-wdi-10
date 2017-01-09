var express = require('express');
var router = express.Router();

var User = require("../db/schema").User;
var Item = require("../db/schema").Item;

// USERS INDEX ROUTE
router
  .get('/', function(req, res){
    User.find({})
    .exec(function(err, users){
      console.log(users);
      res.send(users);
    });
  })


  // USER SHOW ROUTE
  .get('/:id', function(req, res){
    var id = req.params.id;

    User.findById(id)
    .exec(function(user){
      console.log("user: ", user);
      user.first_name = "Dickface";
      return user.save();
    })
    .then(function(user){
      console.log(user);
      res.send(user);
    })
    .catch(function(err){
      if(err){ console.log(err); }
    });
  });



// USER CREATE ROUTE


// USER UPDATE ROUTE


// USER DESTROY


// ADD A NEW ITEM


// REMOVE AN ITEM


module.exports = router;
