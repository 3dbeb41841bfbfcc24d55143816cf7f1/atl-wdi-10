angular.module('giphyAngularApp')
  .controller('HomeController', HomeController)
  .controller('GiphyController', GiphyController);

function HomeController($GiphyService) {
  $GiphyService.getSavedGifs();
}

function GiphyController($http, $state, $stateParams, $GiphyService) {
  var self = this;
  self.savedGifs = [];

  getSavedGifs();

  function getGif(){
    $GiphyService.getGif()
      .then(function(giphyResponse){
        console.log(giphyResponse);
        self.gifUrl = giphyResponse;
        $state.go('gif');
      });
  }

  function saveGif(){
    $GiphyService.saveGif({ url: self.gifUrl, name: self.gifName})
      .then(function(response) {
        self.savedGifs.push(response);
        self.gifName = '';
        $state.go('savedGifs');
      });
  }

  function updateGif(gif) {
    $GiphyService.updateGif(gif)
      .then(function(giphyResponse) {
        self.savedGifs = giphyResponse;
        $state.go('savedGifs');
      });
  }

  function populateFormData(gif) {
    // self.url = gif.url;
    // self.name = gif.name;
    self.gifToUpdate = gif;

    $state.go('updateGif', {gifId: gif._id});

  }

  function getSavedGifs() {
    $GiphyService.getSavedGifs()
      .then(function(response) {
        self.savedGifs = response;

        $state.go('savedGifs');
      });
  }

  function deleteGif(gif) {
    console.log('delete gif');
    $GiphyService.deleteGif(gif)
      .then(function(response) {
        var index = self.savedGifs.indexOf(gif);
        self.savedGifs.splice(index, 1);

        $state.go('savedGifs');
      });
  }

  self.getGif = getGif;
  self.saveGif = saveGif;
  self.updateGif = updateGif;
  self.populateFormData = populateFormData;
  self.getSavedGifs = getSavedGifs;
  self.deleteGif = deleteGif;
}
