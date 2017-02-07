  angular.module('giphyAngularApp')
    .controller('HomeController', HomeController)
    .controller('AuthController', AuthController)
    .controller('GiphyController', GiphyController)

    function HomeController($scope, $http) {
      var self = this;

      $scope.$on('userLoggedIn', function(event, data) {
        self.currentUser = data;
      })

      $scope.$on('userLoggedOut', function(event, data) {
        self.currentUser = null;
      })
    }

    function AuthController($http, $state, $scope, $rootScope) {
      var self = this;

      function signup(userPass) {
        $http.post('/users', userPass)
          .then(function(response) {
            $state.go('login')
          })
      }

      function login(userPass) {
        $http.post('/sessions/login', userPass)
          .then(function(response) {

            // LISTENER IS IN HOMECONTROLLER LINE 9
            $scope.$emit('userLoggedIn', response.data.data)
            $rootScope.$emit('fetchData', response.data.data)
            $state.go('gif')
          })
      }

      function logout() {
        $http.delete('/sessions')
          .then(function(response) {
            $scope.$emit('userLoggedOut');

            $state.go('index');
          })
      }

      self.logout = logout;
      self.signup = signup;
      self.login = login;
    }

    function GiphyController($scope, $http, $state, $stateParams, $rootScope) {
      var self = this;
      self.savedGifs = [];

      $rootScope.$on('fetchData', function(event, data) {
        populateInitialState(data)
      });

      function populateInitialState(currentUser) {
        $http.get(`users/${currentUser._id}/gifs`)
          .then(function(response) {
            self.savedGifs = response.data.gifs
          })
      }

      function getGif() {
        $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC')
          .then(function(giphyResponse) {
            self.gifUrl = giphyResponse.data.data.image_url;

            $state.go('gif');
          })
      }

      function getSavedGifs(currentUser) {
        $http.get(`users/${currentUser._id}/gifs`)
          .then(function(response) {
            self.savedGifs = response.data.gifs

            $state.go('savedGifs', {userId: currentUser._id})
          })
      }

      function saveGif(url, currentUser) {
        $http.post(`/users/${currentUser._id}/gifs`, {
          url: url,
          name: self.name
        }).then(function(serverResponse) {
          self.savedGifs.push(serverResponse.data.gif);
          self.name = '';
          self.gifUrl = '';

          $state.go('savedGifs', { userId: currentUser._id })
        })
      }

      function populateFormData(gif, currentUser) {
        self.url = gif.url
        self.name = gif.name

        $state.go('updateGif', {
          userId: currentUser._id,
          gifId: gif._id
        })
       }

      function updateGif(currentUser) {
        $http.put(`users/${currentUser._id}/gifs/${$stateParams.gifId}`, { name: self.name, url: self.url } )
          .then(function(giphyResponse) {
            self.savedGifs = giphyResponse.data.currentUser.gifs;

            self.url = '';
            self.name = '';

            $state.go('savedGifs', { userId: currentUser._id })
          })
      }

      function deleteGif(id, currentUser) {
        console.log(id)
        $http.delete(`users/${currentUser._id}/gifs/${id}`)
          .then(function(response) {
            self.savedGifs = response.data.currentUser.gifs
          })
      }

      this.getGif = getGif;
      this.saveGif = saveGif;
      this.updateGif = updateGif;
      this.populateFormData = populateFormData;
      this.getSavedGifs = getSavedGifs;
      this.deleteGif = deleteGif;
    };
