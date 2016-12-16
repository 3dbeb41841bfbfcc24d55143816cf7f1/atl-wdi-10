$(document).ready(function() {
    console.log('loaded');

    // Invoke your chain of functions and listeners within $(document).ready()

});

var memoryGame = {
  tiles: ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'],

  shuffle: function(o) {
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
          return o;
  },

  start: function() {

  },

  makeAndDisplayTiles: function() {

  },

  makePlay: function(tile) {

  },

  checkForMatch: function() {

  },

  checkForWin: function() {

  }
}
