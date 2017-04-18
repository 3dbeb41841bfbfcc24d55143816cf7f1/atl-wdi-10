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

router.post('/', function(req, res){
  var gif = new Gif(req.body);

  gif.save(function(err, gif){
    if (err) console.log(err);
    res.json({status: 201, data: "succesful creation"})
  });

});

module.exports = router;
