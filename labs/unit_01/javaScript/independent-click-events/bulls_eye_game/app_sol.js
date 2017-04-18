// ** BULLSEYE ** //

// STEP 1:  Add click handlers to update the score to be:
//          100 points - Bullseye
//           50 points - Middle Ring
//           10 points - Outer Ring
//            0 points - Miss  (done for you)

// STEP 2: Break down the updateScore method, write a paragraph or comment
//         how the function works line by line

// STEP 3:  Highlight the element that was clicked on
//          using the CSS `background-color: yellow`
// BONUS:  Implement setTimeout so the background is yellow for only two seconds

// EXPLORATION: Comment out event.stopPropagation in each function, and then click
//              the inner ring. What happens?

// To test solution: change the js file required in index.html from app.js to app_sol.js

window.onload = function() {
  // Querying for the rings
  var ring1 = document.querySelector('.ring-1');
  var ring2 = document.querySelector('.ring-2');
  var ring3 = document.querySelector('.ring-3');

  // Setting clickEvents on the body and each ring
  document.body.addEventListener('click', bullseyeGame.miss);
  ring1.addEventListener('click', bullseyeGame.outerRing)
  ring2.addEventListener('click', bullseyeGame.middleRing)
  ring3.addEventListener('click', bullseyeGame.innerRing)

}


var bullseyeGame = {
  score: 0,

  updateScore: function(points) {
    var scoreElement = document.querySelector('.score');
    this.score += points

    scoreElement.innerHTML = `${this.score} points`
  },

  miss: function(event) {
/*1.*/ event.stopPropagation();

    /*2.*/       /*4.*/
    setTimeout(function() {

      bullseyeGame.updateScore(0);
      // [ALERT:] needs to be bullseyeGame because this in clickEvents refers to the html
      // element that was clicked
      document.body.style.backgroundColor = 'white'
      alert('YOU MISSED');
    }, 500) // the function passed to set timeout executes half a second late (500ms)

/*3.*/ document.body.style.backgroundColor = 'yellow'
  },
  /*
  1. event.stopPropagation is invoked
  2. setTimeout starts counting down from half a second
  3. the body's backgroundColor is set to yellow
  4. setTimeout's timer runs down, and the anonymous function passed as an argument
     gets invoked

  */


  outerRing: function(event) {
    event.stopPropagation();
    var outerRing = this;
    /*
      `this` refers to the element that was clicked.
      The function passed to setTimeout creates a *NEW* scope, a new *this*,
      so we save the element clicked to a variable so we can access it from inner
      scopes
    */
    setTimeout(function() {
      bullseyeGame.updateScore(10);

      outerRing.style.backgroundColor = 'red';
      alert('outerRing was clicked');
    }, 500);

    outerRing.style.backgroundColor = 'yellow';
  },

  middleRing: function(event) {
    event.stopPropagation();
    var middleRing = this;

    setTimeout(function() {
      bullseyeGame.updateScore(50);

      middleRing.style.backgroundColor = 'white';
      alert('middleRing was clicked');
    }, 500);

    middleRing.style.backgroundColor = 'yellow';
  },

  innerRing: function(event) {
    event.stopPropagation();
    var innerRing = this;

    setTimeout(function() {
      bullseyeGame.updateScore(100);

      innerRing.style.backgroundColor = 'red';
      alert('innerRing was clicked');
    }, 500);

    innerRing.style.backgroundColor = 'yellow';
  }
}
