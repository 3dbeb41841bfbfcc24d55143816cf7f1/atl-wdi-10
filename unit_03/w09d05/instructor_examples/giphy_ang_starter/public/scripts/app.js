  angular.module('giphyAngularApp')
    .controller('HomeController', HomeController)
    .controller('GiphyController', GiphyController)

    function HomeController() {
    }

    function GiphyController($http, $state, $stateParams) {
      var self = this;
      self.savedGifs = [];

      getSavedGifs()

      function getGif() {
        $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC')
          .then(function(giphyResponse) {
            // self = this & this = instantiated Giphy Controller
            self.gifUrl = giphyResponse.data.data.image_url

            $state.go('gif')
          })
      }

      function saveGif() {
        $http.post('/gifs', { url: self.gifUrl, name: self.gifName} )
          .then(function(response) {
            console.log(response.data.data)

            self.savedGifs.push(response.data.data)
            // acting as a redirect
            $state.go('savedGifs')
          })
      }

      function updateGif(gif) {
        console.log($stateParams)
        $http.put(`/gifs/${gif._id}`, { name: self.name, url: self.url } )
          .then(function(giphyResponse) {

            self.savedGifs = giphyResponse.data.gifs;

            self.url = '';
            self.name = '';

            $state.go('savedGifs')
          })
      }

      function populateFormData(gif) {
        // self.url = gif.url;
        // self.name = gif.name;
        self.gifToUpdate = gif

        $state.go('updateGif', {gifId: gif._id})

      }

      function getSavedGifs() {
        $http.get('/gifs')
          .then(function(response) {
            self.savedGifs = response.data.gifs

            $state.go('savedGifs')
          })
      }

      function deleteGif() {
        console.log('delete gif')
      }

      self.getGif = getGif;
      self.saveGif = saveGif;
      self.updateGif = updateGif;
      self.populateFormData = populateFormData;
      self.getSavedGifs = getSavedGifs;
      self.deleteGif = deleteGif;
    }
