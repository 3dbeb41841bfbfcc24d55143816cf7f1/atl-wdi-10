# Memory!

You've already built memory in JS as one of our first games! Maybe you got it done, maybe you didn't but here is your second shot. This time though, instead of doing it on your own and instead of Vanilla JS we're going to use jQuery. You're still going to get the starter code you had last time, and the functions are going to be the same.

We're going to take it one step at a time and come together at the end of each step to compare how we solved it.


### Starter code

We have provided some functions and prompts for you in the `app.js`.

We have also provided a `shuffle()` function. You do not need to change the shuffle function, you can simply use it later to shuffle your tiles array.


### For the game, you will need

#### Data

- an array of ten tiles
- your ten 'tiles' will represent the letter values that will be displayed on each DOM tile. eg. ['A', 'A', 'B', 'B', etc.]

**Step 1** <br>

- `start()`
- shuffle the tiles array
- then call `makeAndDisplayTiles` to build and display the gameboard

**Step 2** <br>

- `makeAndDisplayTiles()`
  - it should clear whatever text was in the `info` div from the last game that was played
  - this function should empty the container that will hold the gameboard tiles (clearing it from the previous game that was played)
- it should create 10 new game tiles (you will want to use a loop to create these tiles)
  - give them the class 'column'
  - give them a 'data-value' attribute from each element of your tiles array. Ex: The output for an 'A' tile will look like ` <div class="column" data-value="A"></div> `
  - add the game tiles to the board
  - it should add click events to each of the gameboard tiles
  - Each click event should call the makePlay function passing it the tile that was clicked. Strong hint: the tile that was clicked is `this` tile . . . Can you pass `this` as a parameter to the makePlay function? Test it out.


  **Step 3** <br>

  - `makePlay(tile)`
  - this function should set the text of the current clicked tile to the value stored in the data attribute
  - it should add a class of 'clicked' to the tile (we will use this to check the number of clicked tiles later)
  - if the number of clicked tiles is 2, then it should check for a match (hint: You might want to make an array to hold your clicked tiles. Check the length of the array of clicked items... if it's 2, you're good to go!).

  **Step 4** <br>

  - `checkForMatch()`
  - write the code for this function _inside_ the `setTimeout`! The setTimeout is there to delay the disappearance of the cards.
  - this should retrieve the data-value of the two clicked tiles
  - if they are a match
  - the 'clicked' class should be removed from the tiles
  - the 'found' class should be added to the tiles
  - should check for a win
  - if no match is found
  - the text of the clicked cards should be set back to empty
  - the clicked class should be removed


  **Step 5** <br>

  *After you have the preceding functions working:*

  - `checkForWin()`
  - if the number of found tiles is 10
  - add a winning message to the info div
  - remove the found class
  - add a won class
