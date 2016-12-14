$(document).ready(function() {
  var $startButton = $('#start');
  var $resetButton = $('#reset');

  $startButton.click(function($event) {
    $event.stopPropagation()

    console.log('Starting a game!', $event);
    triviaGame.start();
  });

  $resetButton.click(function($event) {
    $event.stopPropagation()

    triviaGame.reset()
  })
})


var triviaGame = {
  triviaQuestions: {
    1: {
        question: "What color is the sky?",
        answers: {
          a1: {text: "blue", key: true},
          a2: {text: "red", key: false},
          a3: {text: "green", key: false},
          a4: {text: "black", key: false}
        }
      },
    2: {
      question: "What color is the dirt?",
      answers: {
        a1: {text: "brown", key: true},
        a2: {text: "red", key: false},
        a3: {text: "green", key: false},
        a4: {text: "pink", key: false}
    }}
  },

  score: 0,
  progress: 0,

  start: function() {

  },

  loadQuestion: function(questionKey) {

  },

  checkAnswer: function($answerNode) {

  },

  nextQuestion: function($answer) {

  },

  checkGameEnd: function() {

  },

  reset: function() {

  },

  triggerWinState: function() {
    
  }
}
