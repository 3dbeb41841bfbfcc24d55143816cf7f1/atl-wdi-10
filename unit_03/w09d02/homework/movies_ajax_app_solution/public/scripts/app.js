
var searchMovie = function(test) {
  var $container = $('.movie-container');
  //clear out previous search query
  $container.empty();

  //get the query from input box
  var query = $("input[name='title']").val();

  //make AJAX call to omdbapi
  $.get('http://www.omdbapi.com/?t='+query+'&y=&plot=short&r=json')
  .done(function(movie) {

    var $title = $('<h1>').html(movie.Title).addClass('title');
    var $image = $('<img>').attr('src', movie.Poster).addClass('image');
    var $year = $('<p>').html(movie.Year).addClass('year');
    var $description = $('<p>').html(movie.Plot).addClass('description');
    var $button = $('<button>').html('Save to My Movies').addClass('save').click(function(event) {
      event.preventDefault();
      saveMovie();
    });

    $container.append($title)
      .append($image)
      .append($year)
      .append($description)
      .append($button);

  });


};

//CREATE: send AJAX call to backend and create movie
var saveMovie = function() {
  console.log("SAVE MOVIE WAHHHOOO");
  //grab all the values of the movie
  var title = $('.title').html();
  var image = $('.image').attr('src');
  var year = $('.year').html();
  var description = $('.description').html();

  var data = {
    title: title,
    image: image,
    year: year,
    description: description
  };

  $.post('/movies', data)
  .done(function(response) {
    console.log(response);
    getSavedMovies();
  });
};

//gets all saved movies
var getSavedMovies = function() {
  console.log('get saved movies');
  $.get('/movies')
  .done(function(response) {
    console.log(response);
    $(".my-movies").empty();

    response.movies.forEach(function(el){

      var title = $('<h1>').text(el.title);
      var movieImage = $('<img>').attr('src', el.image);
      var year = $('<p>').text(el.year);
      var description = $('<p>').text(el.description);

      var editMovieButton = $('<button>').text('Edit Movie').addClass('edit').click(function(e){
        e.preventDefault();
        editMovie(el._id);
      });

      var deleteMovieButton = $('<button>').text('cash me outside').addClass('delete').click(function(e){
        e.preventDefault();
        deleteMovie(el._id);
      });

      $(".my-movies").append(title)
      .append(movieImage)
      .append(year)
      .append(description)
      .append(editMovieButton)
      .append(deleteMovieButton);
    });
  });
};

//renders the Edit Form
var editMovie = function(id){

  $('.edit-form').show();
  $('.my-movies').hide();
  $('.container').hide();

  $('.update').click(function(event){
    event.preventDefault();
    updateMovie(id);
  });
};

//EDIT : send AJAX call to backend Edit route
var updateMovie = function(id){

  var data = $('.edit-form').serialize();

  // option2 to grab form data
  // var data1 = {
  //   title: $(".edit-form").find("input[name='title']").val(),
  //   image: $(".edit-form").find("input[name='image']").val(),
  //   description: $(".edit-form").find("input[name='description']").val(),
  //   year: $(".edit-form").find("input[name='year']").val()
  // };
  //

  $.put(`/movies/${id}`, data)
  .done(function(response){
    console.log(response);
    getSavedMovies();

  });
};

// DELETE: send AJAX call to backend Delete route
var deleteMovie = function(id){
  $.delete(`movies/${id}`)
  .done(function(response){
    console.log(response);
    getSavedMovies();
  });
};


// INDEX PAGE CLICK EVENTS
$('.search').click(function(event) {
  event.preventDefault();
  searchMovie();
});

$('.show-movie').click(function(event) {
  event.preventDefault();
  $('.my-movies').show();
  console.log('clicked saved');
  getSavedMovies();
});
