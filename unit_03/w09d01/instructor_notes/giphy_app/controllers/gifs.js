var express = require('express');
var router = express.Router();
var Gif = require('../models/gif.js');

router.get('/', function(req, res) {
  console.log('HIII')
  Gif.find({}).exec(function(err, gifs){
    if (err) { console.log(err); }
    console.log(gifs)
    res.json({ gifs })
  });
})

// router.get('/:id', function(req, res) {
//   Gif.findById(req.params.id)
//   .exec(function(err, gif) {
//     if (err) console.log(err);
//     console.log(user);
//   });
// })

router.post('/', function(req, res){
  console.log(req.body)
  var gif = new Gif(req.body);

  gif.save(function(err, gif){
    if (err) console.log(err);
  });
});

module.exports = router;
