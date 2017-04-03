angular
    .module('moviesApp')
    .controller('MoviesController', MoviesController);

function MoviesController () {
    this.movieList = [
        {title: 'Shazaam', year: 1980},
        {title: 'Space Jam', year: 1980},
        {title: 'In Bruges', year: 1980},
        {title: 'Star Wars Episode I: The Phantom Menace', year: 1980},
        {title: 'Breakin 2: Electric Boogaloo', year: 1980}
    ]
}