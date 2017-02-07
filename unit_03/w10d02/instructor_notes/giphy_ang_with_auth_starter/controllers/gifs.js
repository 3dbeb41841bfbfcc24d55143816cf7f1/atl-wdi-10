var express = require('express');
var router = express.Router({mergeParams: true});
var Gif = require('../models/gif.js');
var User = require('../models/user.js')

router.get('/', function(req, res) {
  User.findById(req.params.id).exec()
    .then(function(user) {
      res.json({ gifs: user.gifs });
    })
    .catch(function(err) {
      res.json(err)
    })
})

router.post('/', function(req, res){
  User.findById(req.params.id).exec()
  .then(function(user) {
    var newGif = new Gif({
      name: req.body.name,
      url: req.body.url
    });

    user.gifs.push(newGif);
    user.save();

    var gif = user.gifs.id(newGif._id)

    res.json({gif: gif });
  })
  .catch(function(err) {
    res.json(err)
  })
});

router.put('/:gifId', function(req, res) {
  User.findById(req.params.id).exec()
    .then(function(user) {
      var gif = user.gifs.id(req.params.gifId);

      gif.url = req.body.url;
      gif.name = req.body.name;

      user.save();
      res.json({ currentUser: user });
    })
    .catch(function(err) {
      res.json(err)
    })
})

router.delete('/:gifId', function(req, res) {
  User.findById(req.params.id).exec()
    .then(function(user){
      user.gifs.id(req.params.gifId).remove();
      user.save();
      res.json({ currentUser: user });
    })
    .catch(function(err) {
      res.json(err)
    })
})

module.exports = router;
