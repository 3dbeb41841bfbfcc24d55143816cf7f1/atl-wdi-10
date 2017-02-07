angular.module('giphyAngularApp', ['ui.router'])
  .config(GiphyRouter);

GiphyRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function GiphyRouter($stateProvider, $urlRouterProvider, $locationProvider) {



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
    });

    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });

    $urlRouterProvider.otherwise('/');

}
