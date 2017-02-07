  angular.module('giphyAngularApp')
    .controller('HomeController', HomeController)
    .controller('AuthController', AuthController)
    .controller('GiphyController', GiphyController)

    function HomeController($scope, $http) {
      var self = this;
    }

    function AuthController($http, $state, $scope, $rootScope) {
      var self = this;
    }

    function GiphyController($scope, $http, $state, $stateParams, $rootScope) {
      var self = this;
      self.savedGifs = [];

      $rootScope.$on('fetchData', function(event, data) {
        populateInitialState(data)
      });

      function populateInitialState(data) {
        $http.get(`users/${currentUser._id}/gifs`)
          .then(function(response) {
            self.savedGifs = response.data.gifs
          })
      }

      function getSavedGifs() {

      }

      function getGif() {
        $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC')
          .then(function(giphyResponse) {
            self.gifUrl = giphyResponse.data.data.image_url;

            $state.go('gif');
          })
      }

      function saveGif(url) {

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
