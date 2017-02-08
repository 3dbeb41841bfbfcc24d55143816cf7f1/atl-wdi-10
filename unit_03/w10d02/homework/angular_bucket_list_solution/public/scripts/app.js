angular.module('listAngularApp')
  .controller('HomeController', HomeController)
  .controller('AuthController', AuthController)
  .controller('ListController', ListController)

  function HomeController($scope, $http) {
    var self = this;

    $scope.$on('userLoggedIn', function(event, data){
      self.currentUser = data;
    });

    $scope.$on('userLoggedOut', function(event, data) {
      self.currentUser = null;
    });
  }

  function AuthController($http, $state, $scope, $rootScope) {
    var self = this;
    var allUsers = allUsers;

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

    function getAllUsers(){
      $http
      .get('/users')
      .then(function(response){
        console.log(response);
        console.log(response.data.users);
        self.allUsers = response.data.users
      });
    }

    getAllUsers();

    this.signup = signup;
    this.login = login;
    this.logout = logout;
  }

  function ListController($scope, $http, $state, $stateParams, $rootScope) {
      var list = this;
      list.saveList = saveList;
      list.showUser = showUser;
      list.showEditForm = showEditForm;
      list.updateList = updateList;
      list.userList = [];
      list.deleteList = deleteList;
      list.completed = completed;

      //clicking on the user name will change state to the user page
      function showUser(userId){
      $http
        .get('/users/' + userId)
        .then(function(response){
          console.log(response);
          console.log(response.data.user.list);
          if(response.data.status === 401){return}
          list.userList = response.data.user.list;
          $state.go('user', {userId: userId});
        });
      }

      //save list to database
      function saveList(id){
        console.log(id);
        console.log("New list: ", list.newList);
        $http
        .post('/users/' + id + '/lists', {name: list.newList})
        .then(function(response){
          console.log(response);
          list.userList = response.data.user.list;
        });
      }

      //show the edit form
      function showEditForm(currentList, currentUser) {
        console.log(list);
        self.name = currentList.name;

        $state.go('updateList', {
          userId: currentUser._id,
          listId: currentList._id,
          currentList: currentList
        });
       }

       //edit the list item
       function updateList(currentUser, currentList) {
         console.log($stateParams);
         console.log("***LIST: ", currentList);
         $http.put(`/users/${currentUser._id}/lists/${$stateParams.listId}`, { name: list.name} )
           .then(function(response) {
             console.log(response);
            list.userList = response.data.user.list;

             $state.go('user', {id: currentUser._id});
           });
       }

       //edit the list item upon completion
       function completed(currentList, currentUser) {

         $http.put(`/users/${currentUser._id}/lists/${currentList._id}`, { name: currentList.name, complete: !currentList.complete} )
           .then(function(response) {
             console.log(response);
            list.userList = response.data.user.list;
            // list.updateList(currentUser, list);
            // $state.go('user', {id: currentUser._id});
           });
       }


       //delete the item
      function deleteList(currentUser) {
        $http.delete(`users/${currentUser._id}/lists/${$stateParams.listId}`)
          .then(function(response) {
            console.log(response);
            list.userList = response.data.user.list;
            $state.go('user', {id: currentUser._id});
          });
      }

      // list.completeFilter = function(item) {
      //   return item.complete === true;
      // };

    };
