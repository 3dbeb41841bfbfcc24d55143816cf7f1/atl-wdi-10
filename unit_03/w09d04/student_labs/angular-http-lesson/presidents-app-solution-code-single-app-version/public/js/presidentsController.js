angular.module('ThePresidentsApp', [])
  .controller('PresidentsController', PresidentsController);

PresidentsController.$inject = ['$http'];

function PresidentsController($http){
  var self = this;
  self.all = [];
  self.addPresident = addPresident;
  self.newPresident = {};
  self.getPresidents = getPresidents;
  self.deletePresident = deletePresident;

  getPresidents();
  function getPresidents(){
    $http
      .get('/presidents')
      .then(function(response){
        self.all = response.data.presidents;
    });
  }

  function addPresident(){
    $http
      .post('/presidents', self.newPresident)
      .then(function(response){
        getPresidents();
    });
    self.newPresident = {};
  }

  function deletePresident(president){
    $http
      .delete("/presidents/" + president._id)
      .then(function(response){
        getPresidents();
        // var index = self.all.indexOf(president);
        // self.all.splice(index, 1);
      });
  }
}
