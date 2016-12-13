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



window.onload = function() {
  var body = document.body;
  var ring1 = document.querySelector('.ring-1');
  var ring2 = document.querySelector('.ring-2');
  var ring3 = document.querySelector('.ring-3');

  body.addEventListener('click', bullseyeGame.miss);
  ring1.addEventListener('click', bullseyeGame.outerRing)
}


var bullseyeGame = {
  score: 0,

  updateScore: function(points) {
    var scoreElement = document.querySelector('.score');
    this.score += points

    scoreElement.innerHTML = `${this.score} points`
  },

  miss: function(event) {
    event.stopPropagation();
    alert('YOU MISSED');

    bullseyeGame.updateScore(0);
    // [ALERT:] needs to be bullseyeGame because this in clickEvents refers to the html
    // element that was clicked
  },

  outerRing: function(event) {
    event.stopPropagation();
    alert('outerRing was clicked')
  }
}
