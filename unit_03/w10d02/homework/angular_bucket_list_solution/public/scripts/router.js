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
    url: '/user/:id',
    templateUrl: '/partials/user.html'
  })
  .state('updateList', {
    url: '/update-list/:listId',
    templateUrl: '/partials/update-list.html'
  });
}
