angular.module('listAngularApp')
  .controller('HomeController', HomeController)
  .controller('AuthController', AuthController)
  .controller('ListController', ListController)

  //****************************
  //1. THIS IS THE HOME CONTROLLER
  //****************************
  function HomeController($scope, $http) {
    var self = this;

    $scope.$on('userLoggedIn', function(event, data){
      self.currentUser = data;
    });

    $scope.$on('userLoggedOut', function(event, data) {
      self.currentUser = null;
    });
  }

  //****************************
  //2. THIS IS THE AUTH CONTROLLER
  //****************************
  function AuthController($http, $state, $scope, $rootScope) {
    var self = this;

    function signup(userPass) {
      $http.post('/users', userPass)
        .then(function(response) {
          $state.go('login');
        });
    }

    function login(userPass) {
      $http.post('/sessions/login', userPass)
        .then(function(response) {
          $scope.$emit('userLoggedIn', response.data.data);
          $rootScope.$emit('fetchData', response.data.data);
          getAllUsers();
          $state.go('index', {reload: true});
      });
    }

    function logout() {
      $http.delete('/sessions')
        .then(function(response) {
          $scope.$emit('userLoggedOut');
            $state.go('index', {reload: true});
        });
    }

    this.signup = signup;
    this.login = login;
    this.logout = logout;
  }

  //****************************
  //3. THIS IS THE LIST CONTROLLER
  //****************************
  function ListController($scope, $http, $state, $stateParams, $rootScope) {

    //your code here

  }
