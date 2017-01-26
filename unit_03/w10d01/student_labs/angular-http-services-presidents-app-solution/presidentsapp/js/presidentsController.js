angular.module('ThePresidentsApp', [])
  .controller('PresidentsController', PresidentsController);

PresidentsController.$inject = ['PresidentsService', '$http'];

function PresidentsController(PresidentsService, $http){
  var self = this;

  self.all = [];
  self.test = PresidentsService.test;

  // USE A PROMISE TO RETURN FROM SERVICE
  self.getAll = PresidentsService.getPresidents()
      .then(function(response) {
        console.log(response);
        self.all = response;
      }).catch(function(err) {
        console.log(err);
      });

  self.newPresident = {};

  self.addPresident = function(){
    PresidentsService.addNewPresident(self.newPresident)
      .then(function(response) {
        self.newPresident = {};
        self.all = response;
      });
    };

  self.deletePresident = function(id){
    PresidentsService.deletePresident(id)
      .then(function(response){
        self.all = response;
      });
  };

}
