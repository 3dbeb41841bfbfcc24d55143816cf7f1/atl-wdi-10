angular.module('ThePresidentsApp', [])
  .controller('PresidentsController', PresidentsController);

PresidentsController.$inject = ['$http'];

function PresidentsController($http){
  var self = this;
  self.all = [];

  function getPresidents(){
    $http
      .get('/presidents')
      .then(function(response){
        console.log(response.data);
        self.all = response.data.presidents;
      });
  }

  getPresidents();

  self.addPresident = addPresident;
  self.newPresident = {};

  function addPresident(){
    this.all.push(this.newPresident);
    this.newPresident = {};
  }
}
