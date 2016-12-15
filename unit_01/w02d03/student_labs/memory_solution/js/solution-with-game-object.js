//SOLUTION
window.onload = function() {
  console.log('loaded');

  // Invoke your chain of functions and listeners within window.onload
  // assign the button DOM element to a variable to attach a click event.
  var startButton = document.querySelector('button');

  // add click eventListener to startButton
  startButton.addEventListener("click", game.start);
};

// this object will contain all of your properties and methods/functions
var game = {

  // an array of ten tiles
  tiles: ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'],

  // USE THIS TO SHUFFLE YOUR ARRAYS
  //a = array
  shuffle: function(a) {
    for(var j, x, i = a.length; i; j = Math.floor(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x);
      return a;
  },

  start: function(){
    console.log("started!");
    // shuffle the tiles array
    game.shuffle(game.tiles);

    // then call makeAndDisplayTiles to build and display the gameboard
    game.makeAndDisplayTiles();
  },

  makeAndDisplayTiles: function(){
    // this function should empty the container that will hold the gameboard tiles
    document.getElementById('game').innerHTML = "";

    // it should clear the text in the info div
    document.getElementById('info').innerHTML = "";

    // this is the addEventListener callback function on line 72
    var addClickToTile = function(){
      // Each click event should call the game object’s makePlay function passing it the tile that was clicked.
      game.makePlay(this);
    };

    for(var i = 0; i < game.tiles.length; i++){
      // it should create 10 new game tiles (divs)
      var tile = document.createElement('div');

      // give them the class ‘column’
      tile.className = "column";

      // give them a ‘data-value’ attribute from each element of your tiles array.
      tile.setAttribute('data-value', game.tiles[i]);

      // add the game tiles to the board
      document.getElementById('game').appendChild(tile);

      // should add click events to each of the gameboard tiles
      tile.addEventListener("click", addClickToTile);
    }
  },

  makePlay: function(tile){
    // this function should set the text of the current clicked tile to the value stored in the data attribute
    tile.innerHTML = tile.dataset.value;

    // it should add a class of clicked to the tile
    tile.className += " clicked";

    // grab all the elements with class name of 'clicked'. Will return an array.
    var selected = document.getElementsByClassName('clicked');

    // if the number of clicked tiles is 2, then it should check for a match
    if (selected.length === 2) {
      game.checkForMatch();
    }
  },

  checkForMatch: function() {
    setTimeout(function() {

      // this should retrieve the data-value of the two clicked tiles
      var selected = document.getElementsByClassName('clicked');

      // if they are a match
      if (selected[0].dataset.value === selected[1].dataset.value) {
        console.log('match');
        // the ‘clicked’ class should be removed from the tiles
        // (we're just reassigning the class attribute and omitting '.clicked')
        selected[0].className = "column found";
        selected[0].className = "column found";
        // if no match is found
      } else {
        console.log('no match');

        // the text of the clicked cards should be set back to empty
        selected[0].innerText = "";
        selected[1].innerText = "";

        // the found and clicked classes should both be removed (similar to line 87 comment)
        selected[0].className = "column";
        selected[0].className = "column";
      }
      // should check for a win
      game.checkForWin();
    }, 1000);
  },

  checkForWin: function() {
    var foundItems = document.getElementsByClassName('found');

    // if the number of found tiles is 10
    if (foundItems.length === 10) {
      for (var i=0; i < foundItems.length; i++) {
        // remove the found class + add a won class
        foundItems[i].className = "column won";
      }

      // add a winning message to the info div
      document.getElementById('info').innerHTML = "You're a winner!";

    }
  }
};
