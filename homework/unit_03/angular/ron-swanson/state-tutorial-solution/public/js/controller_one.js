console.log("CONTROLLER 1!");

angular.module('myApp')
  .controller('FirstController', FirstController);

FirstController.$inject = ['$http'];

function FirstController($http){
  var first = this;
  first.message = "Hello I am the message for the first state!";
}
