angular.module('ThePresidentsApp')
  .service('PresidentsService', PresidentsService);

  PresidentsService.$inject = ['$http'];

  function PresidentsService($http){
    var self = this;
    this.test = "Marc";

    this.getPresidents = function(){
      return $http.get('http://localhost:3000/presidents')
        .then(function(response){
          return response.data.presidents;
        });
    };

    this.addNewPresident = function(data){
      return $http.post('http://localhost:3000/presidents', data)
        .then(function(response){
          // return response.data.president;
          return self.getPresidents();
        });
    };

    this.deletePresident = function(id){
      return $http.delete('http://localhost:3000/presidents/' + id)
        .then(function(response){
          console.log(response.data.message);
          return self.getPresidents();
        });
    };

}
