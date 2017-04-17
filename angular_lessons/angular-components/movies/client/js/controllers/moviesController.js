angular
    .module('moviesApp')
    .controller('MoviesController', MoviesController);

function MoviesController() {
    var vm = this;

    vm.movieList = [
        { title: 'Toy Story 3', year: 2010 },
        { title: 'In Bruges', year: 2008 },
        { title: 'Breakin 2: Electric Boogaloo', year: 1984 },
        { title: 'Drumline', year: 2002 },
        { title: 'The Bicycle Thief', year: 1948 }
    ]
}
