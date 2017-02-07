console.log("ROUTER");

angular.module('budgetApp', ['ui.router'])
  .config(appRouter);

function appRouter($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('expenses', {
    url: '/expenses',
    templateUrl: '/partials/expenses.html',
    controller: 'MainController as main'
  })
  .state('credits', {
    url: '/credits',
    templateUrl: '/partials/credits.html',
    controller: 'MainController as main'
  })
  .state('balance', {
    url: '/',
    templateUrl: '/partials/balance.html',
    controller: 'MainController as main'
  });
}
