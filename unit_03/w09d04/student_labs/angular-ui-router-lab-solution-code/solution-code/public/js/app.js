(function(){
  angular
    .module('InfamousCriminals', ['ui.router'])
    .config(CriminalRouter);

  function CriminalRouter($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/index");

    $stateProvider
    .state('index', {
      url: '/',
      templateUrl: 'list.html'
    })
    .state('new', {
      url: '/new',
      templateUrl: 'new.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'about.html'
    })
    .state('show', {
      url: '/criminals/:id',
      templateUrl: 'show.html'
    });


  }
})()
