  angular.module('giphyAngularApp')
    .controller('HomeController', HomeController)
    .controller('GiphyController', GiphyController)

    function HomeController($scope, $http) {
    }

    function GiphyController($http, $state, $stateParams, $filter) {
      var self = this;
      self.savedGifs = [];
      self.name = '';
      self.url = '';

      getSavedGifs()
      function getSavedGifs() {
        $http.get('/gifs')
          .then(function(response) {
            self.savedGifs = response.data.gifs

            $state.go('savedGifs')
          })
      }

      function getGif() {
        $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC')
          .then(function(giphyResponse) {
            self.gifUrl = giphyResponse.data.data.image_url;

            $state.go('gif');
          })
      }

      function saveGif(url) {
        $http.post('/gifs', {url: url, name: self.name} )
          .then(function(giphyResponse) {
            self.savedGifs.push(giphyResponse.data.data);

            $state.go('savedGifs')
          })
      }

      function populateFormData(gif) {
        self.url = gif.url
        self.name = gif.name

        $state.go('updateGif', { gifId: gif._id })
       }

      function updateGif() {
        $http.put(`/gifs/${$stateParams.gifId}`, { name: self.name, url: self.url } )
          .then(function(giphyResponse) {
            self.savedGifs = giphyResponse.data.gifs;

            self.url = '';
            self.name = '';

            $state.go('savedGifs')
          })
      }

      function deleteGif(id) {
        $http.delete(`/gifs/${id}`)
          .then(function(response) {
            self.savedGifs.pop($filter('filter')(self.savedGifs, {_id: id}))
          })
      }


      this.getGif = getGif;
      this.saveGif = saveGif;
      this.updateGif = updateGif;
      this.populateFormData = populateFormData;
      this.getSavedGifs = getSavedGifs;
      this.deleteGif = deleteGif;
    };
