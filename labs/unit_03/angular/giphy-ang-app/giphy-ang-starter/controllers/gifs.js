var express = require('express');
var router = express.Router();
var Gif = require('../models/gif.js');

router.get('/', function(req, res) {
  Gif.find({}).exec(function(err, gifs){
    if (err) { console.log(err); }
    console.log(gifs)
    res.json({ gifs })
  });
})

router.post('/', function(req, res){
  Gif.create( req.body )
  .then(function(gif) {
    console.log('succces', gif)

    return Gif.find({}).exec()
  })
  .then(function(gifs) {
    console.log(gifs)
    res.json({
      data: gifs
    })
  })
});

router.put('/:id', function(req, res) {
  Gif.update({_id: req.params.id}, req.body)
   .then(function() {
     return Gif.find({}).exec();
   })
   .then(function(gifs) {
     res.json({message: "succesfully updated", gifs: gifs})
   })
   .catch(function(err) {
     res.json(400, err)
   });
})

router.delete('/:id', function(req, res) {
  var id = req.params.id;

  Gif.remove({_id: id}, function(error) {
    if (error) response.json({message: 'Could not delete gif b/c: ' + error});

    res.json({message: 'gif successfully deleted'});
  })
})

module.exports = router;
