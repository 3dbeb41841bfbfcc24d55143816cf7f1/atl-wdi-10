angular
  .module('thePresidentsApp')
  .controller('PresidentsController', PresidentsController);

PresidentsController.$inject = ['$http'];

function PresidentsController($http) {
  var vm = this;

  vm.all = [];
  vm.newPresident = {};
  vm.addPresident = addPresident;
  vm.updatePresident = updatePresident;
  vm.deletePresident = deletePresident;

  activate();

  function activate() {
    getAllPresidents();
  }

  function addPresident(){
    $http
      .post('/presidents', vm.newPresident)
      .then(function(response){
        vm.all.push(response.data.president);
        vm.newPresident = {};
      });
  }

  function deletePresident(president){
    $http
      .delete('/presidents/' + president._id)
      .then(function(response){
        removePresidentFromList(president);
      });
  }

  function getAllPresidents(){
    $http
      .get('/presidents')
      .then(function(response){
        vm.all = response.data.presidents;
      });
  }

  function removePresidentFromList(president) {
    var index = vm.all.indexOf(president);
    vm.all.splice(index, 1);
  }

  function updatePresident(president){
    $http
      .patch('/presidents/' + president._id, president)
      .then(function(response){
        president.isEditing = false
      });
  }
}
