// General Assembly, WDI (Web Development Immersive) Remote, Cohort 04 (Matey)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

"use strict";

// Data Management and Business Logic //
const GameEngine = {
  board: Array(9).fill(null),
    /// e.g. ["X", "O", "X", null, null, null, null, null, null]
  currentPlayer: "X",
  gameOver: false,
  resetGame: function(){
    this.board = Array(9).fill(null);
    this.currentPlayer = "X";
    this.gameOver = false;
  },
  toggleCurrentPlayer: function(){
    if (this.currentPlayer === "X") {
      this.currentPlayer = "O";
    } else {
      this.currentPlayer = "X";
    }
  },
  isValidMove: function(position){
    if (this.gameOver ||
        position < 0 || position > 8 ||
        this.board[position]) {
      return false;
    }
    return true;
  },
  checkForVictory: function(){
    let p = this.currentPlayer;
    // Check rows
    if ((this.board[0] === p && this.board[1] === p && this.board[2] === p) ||
        (this.board[3] === p && this.board[4] === p && this.board[5] === p) ||
        (this.board[6] === p && this.board[7] === p && this.board[8] === p)) {
      return true;
    }
    // Check columns
    if ((this.board[0] === p && this.board[3] === p && this.board[6] === p) ||
        (this.board[1] === p && this.board[4] === p && this.board[7] === p) ||
        (this.board[2] === p && this.board[5] === p && this.board[8] === p)) {
      return true;
    }
    // Check diagonals
    if ((this.board[0] === p && this.board[4] === p && this.board[8] === p) ||
        (this.board[2] === p && this.board[4] === p && this.board[6] === p)) {
      return true;
    }
    return false;
  },
  makeMove: function(position){
    if (!this.isValidMove(position)) { return false; }
    this.board[position] = this.currentPlayer;
    if (this.checkForVictory() || !this.board.includes(null)) {
      this.gameOver = true;
    } else {
      this.toggleCurrentPlayer();
    }
    return true;
  }
};

// UI //
const ViewEngine = {
  refreshBoardView: function(boardState){
    let spaces = document.querySelectorAll('#board > div');
    for (let i = 0; i < 9; i++){
      spaces[i].innerHTML = boardState[i];
    }
  },
  flashMessage: function(msg){
    document.getElementById('flash-msg').innerHTML = msg;
  },
  clearFlash: function(){
    document.getElementById('flash-msg').innerHTML = null;
  }
};

// Top-Level Application Control //
const GameController = {
  onClickNewGame: function(event){
    GameEngine.resetGame();
    ViewEngine.refreshBoardView(GameEngine.board);
    ViewEngine.clearFlash();
  },
  onClickBoardSpace: function(event){
    let pos = Number(event.target.dataset.position);
    if (GameEngine.isValidMove(pos)) {
      GameEngine.makeMove(pos);
      ViewEngine.refreshBoardView(GameEngine.board);
      if (GameEngine.gameOver) {
        if (GameEngine.checkForVictory()) {
          ViewEngine.flashMessage(`Game Over! ${GameEngine.currentPlayer} is the winner!`)
        } else {
          ViewEngine.flashMessage(`Tie game -- play again?`);
        }
      }
    }
  }
};

window.onload = function(){
  document.getElementById('new-game').onclick = GameController.onClickNewGame;
  let spaces = document.querySelectorAll('#board > div');
  for (let i = 0; i < 9; i++){
    spaces[i].onclick = GameController.onClickBoardSpace;
  }
};
