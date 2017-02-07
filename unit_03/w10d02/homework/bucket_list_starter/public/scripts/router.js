angular.module('listAngularApp', ['ui.router'])
  .config(GiphyRouter);

function GiphyRouter($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('index', {
    url: '/',
    templateUrl: '/partials/home.html'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/partials/login.html'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: '/partials/signup.html'
  })
  .state('user', {
    //state for user show page
  })
  .state('updateList', {
    //state to show edit form
  });
}
