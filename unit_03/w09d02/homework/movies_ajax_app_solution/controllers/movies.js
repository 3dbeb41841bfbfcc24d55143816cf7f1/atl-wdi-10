var express = require('express');
var router = express.Router();
var Movie = require('../models/movie.js');

router.get('/', function(req, res) {
  console.log('*****GOT EM*****');
  Movie.find({}).exec(function(err, movies){
    if (err) { console.log(err); }
    console.log(movies);
    res.json({ movies: movies });
  });
});

router.put('/:id', function(req, res) {
  console.log("*******PUT ROUTE******");
  console.log(req.body);


  Movie.findById(req.params.id)
  .exec(function(err, movie) {
    if (err) console.log(err);
    console.log("*******FOUND THE MOVIE******");
    movie.title = req.body.title;
    movie.image = req.body.image;
    movie.year = req.body.year;
    movie.description = req.body.description;
    movie.rating = req.body.rating;

    movie.save();
    res.json(movie);
  });
});

router.post('/', function(req, res){
  console.log(req.body);
  var movie = new Movie(req.body);
  //
  movie.save(function(err, movie){
    if (err) console.log(err);
  });
  res.json(movie);
  //res.redirect('/movies')
});

router.delete('/:id', function(req, res){
  console.log("MOVIE DELETED!")
  Movie.findById(req.params.id).exec(function(err, movie){
    movie.remove();
    res.json({status: 200});
  });
});

module.exports = router;
