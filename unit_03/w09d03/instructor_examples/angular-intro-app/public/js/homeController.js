angular.module('IntroToAngularApp')
  .controller('HomeController', HomeController);

function HomeController(){
  this.awesome = true;
  this.numbers = [2, 4, 6, 8];
  this.favShow = "The Good Wife";
  
}
