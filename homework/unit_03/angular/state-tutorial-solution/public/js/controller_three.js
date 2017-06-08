console.log("CONTROLLER 3!");

angular.module('myApp')
  .controller('ThirdController', ThirdController);

function ThirdController(){
  var third = this;
  third.message = "Hola I am the message for the third state!";
}
