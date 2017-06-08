console.log("CONTROLLER 2!");

angular.module('myApp')
  .controller('SecondController', SecondController);

function SecondController(){
  var second = this;
  second.message = "Hello I am the message for the first state!";
}
