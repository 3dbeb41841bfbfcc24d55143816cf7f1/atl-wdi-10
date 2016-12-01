var express = require('express');
var router  = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

router.get('/', function(req, res) {
  var query = User.find({});

  query.then(function(users) {
    res.render('users/index.hbs', { users: users, user: req.user})
  })
  .catch(function(err) {
    console.log(err)
  });
});

router.get('/signup', function(req, res) {
  res.render('users/signup');
})

router.post('/signup', function(req, res){
  User.register(new User(
    { username: req.body.username}),
    req.body.password,
    function(err, user) {
      if (err) {
        return res.render('signup');
      } // end if
      res.redirect('/');
    }) // end function
});

router.get('/login', function(req, res) {
  res.render('users/login');

});

router.post('/login', passport.authenticate('local'), function(req, res) {
  req.session.save(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/users');
  });
});

// /user/:user_id/hamburgers/:hamburger_id/topings/

var auth = function(req, res, next) {
  if (!req.user || req.user._id != req.params._id) {
    res.json({status: 401, message: 'unauthorized'})
  } else {
    next() 
  }
}

router.get('/:id', auth, function(req, res) {
    var query = User.findById({_id: req.params.id})

    query.then(function(user) {
      res.json(user)
    })
    .catch(function(err) {
      res.json({message: 'nope' + err});
    });
});

router.get('/logout', function(req, res) {
  req.logout(); // to log out
  res.redirect('/users');
});

module.exports = router;
