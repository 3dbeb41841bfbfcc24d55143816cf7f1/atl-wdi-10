angular.module('giphyAngularApp', ['ui.router'])
  .config(GiphyRouter);

function GiphyRouter($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('index', {
    url: '/'
  })
  .state('gif', {
    url: '/gif',
    templateUrl: '/partials/gif.html'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/partials/login.html'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: '/partials/signup.html'
  })
  .state('savedGifs', {
    url: '/users/:userId/saved-gifs',
    templateUrl: '/partials/saved_gifs.html'
  })
  .state('updateGif', {
    url: '/users/:userId/update-gif/:gifId',
    templateUrl: '/partials/update_gif.html'
  })
}
