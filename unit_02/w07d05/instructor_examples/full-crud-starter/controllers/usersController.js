var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Item = require("../models/item");

// USERS INDEX ROUTE
router.get('/', function(req, res){
  User.find({})
    .exec(function(err, users){
      if (err) { console.log(err); }
      console.log(users);
      res.render('users/index.hbs', { data: users }); // this is a nested/ namespacey type way
      // res.redner('users/index.hbs', users)
    });
});

// USER SHOW ROUTE
router.get('/:id', function(req, res){
  console.log(req.params.id) // to check the id
  User.findById(req.params.id)
  .exec(function(err, user) {
    if (err) console.log(err);
    console.log(user);
    // res.render('user/show.hbs', { user: user } );
    res.render('users/show.hbs', { user } );
  });
});

// USER CREATE ROUTE
router.post('/', function(req, res){
  var user = new User({
    first_name: req.body.first_name,
    email: req.body.email,
    items: req.body.items
  });
  user.save(function(err, user){
    if (err) { console.log(err); }
    console.log(user);
    res.send(user);
  });
});

router.get('/:id/edit', function(req, res) {
  var query = User.findById(req.params.id).exec()

  query.then(function(user) {
    res.render('users/edit', user)
  })
  .catch(function(err) {
    console.log(err)
  })
})

// USER UPDATE ROUTE
router.patch('/:id', function(req, res){
  User.findByIdAndUpdate(req.params.id, req.body
    // { first_name: req.body.first_name,
    // last_name: req.body.last_name,
    // email: req.body.email }


    // can just pass in req.body since it contains the above data
  , { new: true })
  .exec(function(err, user){
    if (err) { console.log(err); }
    console.log(user);
    res.redirect('/users')
  });
});

// USER DESTROY
router.delete('/:id', function(req, res){
  User.findByIdAndRemove(req.params.id)
  .exec(function(err, user) {
    if (err) console.log(err);
    console.log('User deleted!');
    res.send("User deleted");
  });
});

router.get('/:id/items', function(req, res) {
  var query = User.findById(req.params.id).exec()

  query.then(function(user) {
    res.render('items/index', {user})
  })
})

// ADD A NEW ITEM
router.post('/:id/items', function(req, res){
  User.findById(req.params.id)
  .exec(function(err, user){
    user.items.push(new Item({name: req.body.name}));
    user.save(function(err){
      if (err) console.log(err);
      res.send(user);
    });
  });
});

// REMOVE AN ITEM
router.delete('/:userId/items/:id', function(req, res){
  User.findByIdAndUpdate(req.params.userId, {
    $pull:{
      items: {_id: req.params.id}
    }
  })
  .exec(function(err, item){
    if (err) console.log(err);
    res.redirect('/users')
  });
});


module.exports = router;
