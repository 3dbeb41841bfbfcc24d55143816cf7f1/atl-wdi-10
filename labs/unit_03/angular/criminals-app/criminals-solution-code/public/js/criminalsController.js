angular.module('InfamousCriminals')
.controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['$http'];

function CriminalsController($http){
  var vm = this;

  vm.all = [];
  vm.newCriminal = {};
  vm.getCriminals = getCriminals;
  vm.addCriminal = addCriminal;
  vm.deleteCriminal = deleteCriminal;

  getCriminals();

  function getCriminals(){
    $http
      .get('/criminals')
      .then(function(response){
        vm.all = response.data.criminals;
    });
  }

  function addCriminal(){
    $http
      .post('/criminals', vm.newCriminal)
      .then(function(response){
        getCriminals();
    });
    vm.newCriminal = {};
  }

  function deleteCriminal(criminal){
    $http
      .delete("/criminals/" + criminal._id)
      .then(function(response){
        var index = vm.all.indexOf(criminal);
        vm.all.splice(index, 1);
      });
  }
}
