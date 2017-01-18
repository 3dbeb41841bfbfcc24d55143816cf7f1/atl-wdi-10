$(document).ready(function(){

  //*****************************
  //ANIMATE FIRST BOX:
  //*****************************
  function animateBox(){
    //create a new Deferred object
    var deferred = $.Deferred();

    //animate takes in a
    $(".box").animate({left: "500px"}, 3000, function(){
      deferred.resolve();
    });
    //when your function ends, return a promise
    //this function now has a property called done (promise you will tell me when you are done)
    return deferred.promise();
  }

  //*****************************
  //ANIMATE THE OTHER 5 BOXES:
  //*****************************

  //your functions here

  //*****************************
  //ALERTS AFTER EACH ANIMATION
  //*****************************
  function executeAfterAnimation(){
    alert("Animation done!");
  }

  //*****************************
  //YOUR TURN TO CODE!
  //*****************************
  //when animate box is done, fire the next sequence of functions
  animateBox()
    .done(function(){
      executeAfterAnimation();
    });


});
