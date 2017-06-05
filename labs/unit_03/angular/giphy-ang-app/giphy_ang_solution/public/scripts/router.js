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
  .state('savedGifs', {
    url: '/saved-gifs',
    templateUrl: '/partials/saved_gifs.html'
  })
  .state('updateGif', {
    url: '/update-gif/:gifId',
    templateUrl: '/partials/update_gif.html'
  })
}
