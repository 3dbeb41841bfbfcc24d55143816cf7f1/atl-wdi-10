angular.module('myApp', ['ui.router'])
  .config(appRouter);

function appRouter($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('index', {
    url: '/'
  })
  .state('state1', {
    url: '/state1',
    templateUrl: 'partials/state1.html',
    controller: 'FirstController as first'
  })
  .state('state2', {
    url: '/state2',
    templateUrl: 'partials/state2.html',
    controller: 'SecondController as second'
  })
  .state('state3', {
    url: '/state3',
    templateUrl: 'partials/state3.html',
    controller: 'ThirdController as third'
  });
}
