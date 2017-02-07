angular.module('giphyAngularApp')
  .service('$GiphyService', GiphyService);

GiphyService.$inject = ['$http'];

function GiphyService($http){
  console.log("$GihpyService ready for action!");

  this.getGif = function() {
    return $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC')
      .then(function(giphyResponse) {
        return giphyResponse.data.data.image_url;
      });
  };

  this.getSavedGifs = function(){
    return $http.get('/gifs')
      .then(function(response){
        return response.data.gifs;
      });
  };

  this.saveGif = function(newGif){
    return $http.post('/gifs', newGif)
      .then(function(response) {
        return response.data.data;
      });
  };

  this.updateGif = function(gif){
    return $http.put(`/gifs/${gif._id}`, gif)
      .then(function(giphyResponse) {
        return giphyResponse.data.gifs;
      });
  };

  this.deleteGif = function(gif){
    return $http.delete(`/gifs/${gif._id}`);
  };
}
