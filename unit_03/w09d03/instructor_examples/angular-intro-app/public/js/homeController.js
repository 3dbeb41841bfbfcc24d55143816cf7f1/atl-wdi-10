(function(){
  angular.module('IntroToAngularApp')
    .controller('HomeController', HomeController);

  //declaration
  function HomeController(){
    this.awesome = "Schmitty";
    this.favFoods = ["pizza", "beer", "chocolate"];

  }

})()
