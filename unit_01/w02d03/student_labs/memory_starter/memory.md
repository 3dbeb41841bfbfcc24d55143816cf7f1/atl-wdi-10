# Memory!

![reps](http://ikigai.altervista.org/wp-content/uploads/2015/04/memento.jpg)

Today we are going to build the game memory.

### You will need

#### Data

- an array of ten tiles
	- your ten 'tiles' will represent the letter values that will be displayed on each DOM tile. eg. ['A', 'A', 'B', 'B', etc.]

#### Functions


- `window.onload()`
    - write the Javascript that will select the Start Game button element from the DOM
    - assign the button DOM object to a variable
    - attach a click event listener to the variable 
    - Inside that function, add a `console.log('started');` and invoke the `start()` function
- `start()`
	- shuffle the tiles array
	- then call makeAndDisplayTiles to build and display the gameboard
- `makeAndDisplayTiles()`
	- this function should empty the container that will hold the gameboard tiles
	- it should clear the text in the info div
	- it should create 10 new game tiles (divs) 
	    - give them the class 'column'
		- give them a 'data-value' attribute from each element of your tiles array. The output for an 'A' tile will look like ` <div class="column" data-value="A"></div> `
		- add the game tiles to the board
    	- should add click events to each of the gameboard tiles
	   - Each click event should call the game object's makePlay function passing it the tile that was clicked. Strong hint: the tile that was clicked is `this` tile . . . 
- `makePlay(tile)`
	- this function should set the text of the current clicked tile to the value stored in the data attribute
	- it should add a class of clicked to the tile
	- if the number of clicked tiles is 2, then it should check for a match
- `checkForMatch()`
    - the entire contents in this function should be inside a `setTimeout()` 
	- this should retrieve the data-value of the two clicked tiles
	- if they are a match
		- the 'clicked' class should be removed from the tiles
		- the 'found' class should be added
		- hint: the class value of the matching tiles should be 'column found'
	- if no match is found
		- the text of the clicked cards should be set back to empty
		- the found and clicked classes should both be removed
	- should check for a win
- `checkForWin()`
	- if the number of found tiles is 10
		- remove the found class
		- add a won class
 		- add a winning message to the info div


## BONUS

- add a timer
- user can select the speed of the setTimeout()
- add a click counter
- the click event should be turned off for matched tiles