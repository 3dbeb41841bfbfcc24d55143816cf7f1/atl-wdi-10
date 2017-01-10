var express = require('express');
var app = express();
var hbs = require('hbs');

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.send("Hello WDI!");
});

app.get('/favorite-foods', function(req, res) {
    var favoriteFoods = ["Reese's Peanutbutter Cups", 'Taco Soup', 'Grape Nuts', 'Beer', 'Whatever Blue Apron brings me'];

    res.render('favorite-foods', {
          data: favoriteFoods
    });
});

app.get('/greeting', function(req, res) {
  console.log(req.query);

  res.render('greeting', {
    data: req.query.saying
  });
});

app.get('/rihanna', function(req, res) {
  res.send("<a href='https://www.youtube.com/watch?v=HL1UzIK-flA'>Work work work work work</a>");
});

app.get('/hello/:name', function(req, res){
  res.send({params: req.params, queries: req.query});
});

app.get('/:name',function(req, res){
  console.log(req.params);
  console.log(req.route);
  console.log(req.query);
  res.send(`hello ${req.params.name} say ${req.query.first_name}`);
});


var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log('hello-express is listening on port 3000');
});
