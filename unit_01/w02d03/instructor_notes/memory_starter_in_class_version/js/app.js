window.onload = function() {
	console.log('loaded');

	// Invoke your chain of functions and listeners within window.onload

	// write the Javascript that will select the Start Game button element from the DOM
	// assign the button DOM object to a variable
	var startButton = document.querySelector('button');

	// attach a click event listener to the variable
	// and invoke the start() function
	startButton.addEventListener("click", game.start);
};


// this object will contain all of your properties and methods/functions
var game = {
	tiles: ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E"],

	// USE THIS TO SHUFFLE YOUR ARRAYS
	shuffle: function(o) {
	  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	  return o;
	},

	// Inside that function, add a console.log('started')
	start: function(){
		console.log("started!");

		//shuffle the tiles array
		game.shuffle(game.tiles);

		//then call makeAndDisplayTiles to build and display the gameboard
		game.makeAndDisplayTiles();

	},

	makeAndDisplayTiles: function(){
		// this function should empty the container that will hold the gameboard tiles
		document.querySelector('#game').innerHTML = "";

		// it should clear the text in the info div
		document.querySelector('#info').innerHTML = "";

		var addClickToTile = function(){
			game.makePlay(this);
		};

		for (var i = 0; i < game.tiles.length; i++){
			var tile = document.createElement('div');
			// it should create 10 new game tiles (divs)

			// give them the class 'column'
			tile.setAttribute("class", "column");
			// tile.className = "column";

			// give them a 'data-value' attribute from each element of your tiles array. The output for an 'A' tile will look like <div class="column" data-value="A"></div>
			tile.setAttribute('data-value', game.tiles[i]);

			// add the game tiles to the board
			document.querySelector('#game').appendChild(tile);

			// should add click events to each of the gameboard tiles
			tile.addEventListener("click", addClickToTile);

			// Each click event should call the game object's makePlay function passing it the tile that was clicked. Strong hint: the tile that was clicked is this tile . . .
		}
	},

	makePlay: function(tile){
		// this function should set the text of the current clicked tile to the value stored in the data attribute
		tile.innerHTML = tile.dataset.value;

		// it should add a class of clicked to the tile
		tile.className += " clicked";

		// grab all the elements with a class name of "clicked". Will return array.
		var selected = document.getElementsByClassName('clicked');

		// if the number of clicked tiles is 2, then it should check for a match

	}
};
