//SOLUTION
window.onload = function() {
  console.log('loaded');

  // Invoke your chain of functions and listeners within window.onload
  // assign the button DOM element to a variable to attach a click event.
  var startButton = document.querySelector('button');

  // attaching an onclick event to the startButton that will invoke start()
  startButton.onclick = function() {
    start();
  }
}

// an array of ten tiles
var tiles = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'];

// USE THIS TO SHUFFLE YOUR ARRAYS
//o = array
function shuffle(o) {
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function start(){
  // shuffle the tiles array
  shuffle(tiles);

  // then call makeAndDisplayTiles to build and display the gameboard
  makeAndDisplayTiles();
}

function makeAndDisplayTiles(){
  // this function should empty the container that will hold the gameboard tiles
  document.getElementById('game').innerHTML = "";

  // it should clear the text in the info div
  document.getElementById('info').innerHTML = "";

  for(var i = 0; i < tiles.length; i++){
    // it should create 10 new game tiles (divs)
    var tile = document.createElement('div');

    // give them the class ‘column’
    tile.className = "column";

    // give them a ‘data-value’ attribute from each element of your tiles array.
    tile.setAttribute('data-value', tiles[i]);

    // add the game tiles to the board
    document.getElementById('game').appendChild(tile);

    // should add click events to each of the gameboard tiles
    tile.onclick = function(){
      // Each click event should call the game object’s makePlay function passing it the tile that was clicked.
      makePlay(this);
    };
  }
}

function makePlay(tile){
  // this function should set the text of the current clicked tile to the value stored in the data attribute
  tile.innerHTML = tile.dataset.value;

  // it should add a class of clicked to the tile
  tile.className += " clicked";

  // grab all the elements with class name of 'clicked'. Will return an array.
  var selected = document.getElementsByClassName('clicked');

  // if the number of clicked tiles is 2, then it should check for a match
  if (selected.length === 2) {
    checkForMatch();
  }
}

function checkForMatch() {
  setTimeout(function() {

    // this should retrieve the data-value of the two clicked tiles
    var selected = document.getElementsByClassName('clicked');

    // if they are a match
    if (selected[0].dataset.value === selected[1].dataset.value) {
      console.log('match');
      // the ‘clicked’ class should be removed from the tiles
      // (we're just reassigning the class attribute and omitting '.clicked')
      selected[0].className = "column match";
      selected[0].className = "column match";

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
    checkForWin();
  }, 1000);
}

function checkForWin() {
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
