(function(){
  angular.module('TheMET')
    .service('schmittyService', schmittyService);


  function schmittyService(){
    this.greeting = "Hello, this is Schmitty!"

  }

})()
