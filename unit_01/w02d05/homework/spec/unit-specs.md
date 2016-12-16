# Unit Specs

## Unit Spec : `GameEngine`

  ### `resetGame()`

  ```markdown
  1.  It empties `board` of all player symbols.
  2.  It sets `currentPlayer` to "X".
  3.  It sets `gameOver` to `false`.
  ```

  ### `toggleCurrentPlayer()`

  ```markdown
  1.  If the current player is "X", set it to "O".
  2.  If the current player is "O", set it to "X".
  ```

  ### `isValidMove(spaceNumber)`

  ```markdown
  1.  If the game is not over:
    1.1. If a space with that number exists on the board:
      1.1.1  It returns `true` if the space is empty.
      1.1.2  It returns `false` if it is not empty.
    1.2.  If a space with that number does not exist, it returns `false`.
  2.  If the game is over, it returns `false`.
  ```

  ### `checkForVictory()`

  ```markdown
  1.  If the current player has three of their symbol in any row, column, or
      diagonal, it returns `true`.
  2.  If the current player does not meet the win conditions described in 1., it
      returns `false`.
  ```

  ### `makeMove(spaceNumber)`

  ```markdown
  1.  If the move is valid:
    1.1.  Fill the indicated space in `board` with the current player's token
      ("X" / "O").
    1.2.  If this move is a winning move, set `gameOver` to true.
    1.3.  If this move is not a winning move, switch which player is the current
          player.
    1.3.  Return `true`.
  2.  If the move is not valid, return `false`.
  ```

## Unit Spec : `ViewEngine`

  ### `refreshBoardView(boardState)`

  ```markdown
  1.  Given a particular state of the board, it draws the current state of the
      board into the element with id `board`.
  2.  It represents each space on the board as a `<div>`, and the value of that
      space is shown inside the `<div>`
  ```

  ### `flashMessage(msg)`

  ```markdown
  1.  Update the contents of the element with id `flash-msg` to be equal to the
      argument.
  ```

  ### `clearFlash()`

  ```markdown
  1.  Empty the contents of the element with id `flash-msg`.
  ```

## Unit Spec : `GameController`

  ### `onClickNewGame(event)`

  ```markdown
  1.  It resets the game.
  2.  It refreshes the view of the board in the UI.
  ```

  ### `onClickBoardSpace(event)`

  ```markdown
  1.  It determines which space was clicked.
  2.  If it is valid for the current player to make a move in that space:
    2.1.  It updates the state of the board.
      2.1.1.  If the current player has won:
        2.1.1.1.  It records the game as being over.
        2.1.1.2.  It flashes a message indicating that the current player has won.
      2.1.2.  If the current player has not won:
        2.1.2.1.
    2.2   It updates the view of the board in the UI.
  ```
