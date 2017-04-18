$(document).ready(function(){

  function executeAfterAnimation(){
      alert("Animation done!");
  }

  function animateBox(){
    //animate takes a callback function
    $(".box").animate({left: "500px"}, 3000, function animateBox2(){
      $(".box2").animate({left: "500px"}, 3000, function animateBox3(){
        $(".box3").animate({left: "500px"}, 3000, function animateBox4(){
          $(".box4").animate({left: "500px"}, 3000, function animateBox5(){
            $(".box5").animate({left: "500px"}, 3000,   function animateBox6(){
              $(".box6").animate({left: "500px"}, 3000);
              executeAfterAnimation();
              });
            executeAfterAnimation(); });
          executeAfterAnimation(); });
        executeAfterAnimation(); });
      executeAfterAnimation(); });
    }

  //when animate box is done, then move to the next one
  animateBox();
});
