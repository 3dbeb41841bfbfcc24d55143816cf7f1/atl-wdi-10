var express = require('express');
var router = express.Router();

var User = require("../models/user")
var Item = require("../models/item")

// USERS INDEX ROUTE
router.get('/', function(req, res){
  User.find({}, function(err, users){
    console.log(users);
    // res.send(users);
    res.render('users/index', {users: users});
  });
});

// USER SHOW ROUTE
router.get('/:id', function(req, res){
  User.findById(req.params.id, function(err, user){
    console.log(user);
    res.send(user);
  });
});

// USER CREATE ROUTE
router.post('/', function(req, res){
  var user = new User({
    email: req.body.email,
    first_name: req.body.first_name,
    items: req.body.items
  });
  user.save(function(err, user){
    console.log(user);
    res.send(user);
  });
});

// USER UPDATE ROUTE
router.patch('/:id', function(req, res){
  User.findByIdAndUpdate(req.params.id, {
    first_name: req.body.first_name,
    email: req.body.email
  }, {new: true}, function(err, user){
    res.send(user);
  });
});

// USER DESTROY
router.delete('/:id', function(req, res){
  User.findByIdAndRemove(req.params.id, function(err, user){
    if (err) console.log(err);
      console.log("User Deleted");
      res.send("User Deleted");
  });
});

// ADD A NEW ITEM
// router.post('/:id/items', function(req, res){
//   User.findById(req.params.id).exec()
//   .then(function(user){
//     user.items.push(new Item({name: req.body.name}))
//     return user.save()
//   })
// });
router.post('/:id/items', function(req, res){
  User.findById(req.params.id, function(err, user){
    user.items.push(new Item({name: req.body.name}))
    user.save(function(err){
      res.send(user);
    });
  });
});


// REMOVE AN ITEM
router.delete('/:userId/items/:id', function (req, res){
  User.findByIdAndUpdate(req.params.userId, {
    $pull: {
      items: {_id: req.params.id}
    }
  }, function(err, item) {
    if(!err){
      res.send(item + "item Deleted");
    }
  });
});


module.exports = router;
