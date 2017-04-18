$(document).ready(function(){

  function animateBox(){
    //create a new Deferred object
    var deferred = $.Deferred();

    //animate takes a callback function, we are going to decide what to do with the deffered object (ie. resolve, reject)
    $(".box").animate({left: "500px"}, 3000, function(){
      deferred.resolve();
    });

    //when your function ends, return a promise object (it basically says.. promise you will tell me when you are done).
    return deferred.promise();
  }

  function animateBox2(){
    var deferred = $.Deferred();
    $(".box2").animate({left: "500px"}, 3000, function(){
      deferred.resolve();
    });
    return deferred.promise();
  }

  function animateBox3(){
    var deferred = $.Deferred();
    $(".box3").animate({left: "500px"}, 3000, function(){
      deferred.resolve();
    });
    return deferred.promise();
  }


  function executeAfterAnimation(){
    alert("Animation done!");
  }

  function somethingWentWrong(){
    alert("OHHH NOOO. Wait a minute.. something went wrong!");
  }

  //Clicking on the button:
  //when first function is done, then execute the next one, as a CHAIN of events
  $(".button1").click(function(){
    animateBox()
    .then(executeAfterAnimation)
    .then(animateBox2)
    .then(executeAfterAnimation)
    .then(animateBox3)
    .then(executeAfterAnimation)
    .catch(somethingWentWrong);
  });

  //Clicking on the button:
  //when all 3 functions are done, then alert Cool!
  //.then() takes two callback functions as arguments: doneCallback, failCallback
  $(".button2").click(function(){
    $.when(animateBox(), animateBox2(), animateBox3())
    .then(function(){
      alert("Cool!");
    }, function(err){
      console.log(err);
    });
  });


  //another asynchronous function that console logs after 1500 ms
  function wait(ms){
    var deferred = $.Deferred();
    setTimeout(deferred.resolve, ms);
    return deferred.promise();
  }

  wait(1500).then(function(){
    console.log("We waited 1500ms");
  });


});
