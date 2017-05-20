$(function () {

  function buildMovieListHTML(movieSearchResults) {
    var movieSearchInfoDiv = $('#movie-search-info');
    movieSearchInfoDiv.html('');

    movieSearchResults.Search.forEach(function (movie) {
      console.log(movie);
      var movieListEntry = $('<div class="movie-result" id="' + movie.imdbID + '">');

        movieListEntry.append(
            '<img class="movie-poster" src="' + movie.Poster + '" />'
        );

        movieListEntry.append(
            '<div><strong>' + movie.Title + '</strong></div>'
        );

        movieListEntry.append(
            '<div>' + movie.Year + '</div>'
        );

      movieListEntry.append('</div>');

      movieSearchInfoDiv.append(movieListEntry);
    });

  }

  $('#movie-search-button').on('click', function (event) {
    event.preventDefault();

    var movieSearchTerm = $('#movie-search-term').val();

    $.get('http://www.omdbapi.com/?apikey=d31f1a94&s=' + movieSearchTerm).
        done(function (movieSearchResults) {
          buildMovieListHTML(movieSearchResults);
        });
  });

});