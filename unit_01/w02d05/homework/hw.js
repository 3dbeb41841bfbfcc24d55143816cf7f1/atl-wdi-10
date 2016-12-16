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
    // Your Code Here
  },
  toggleCurrentPlayer: function(){
    // Your Code Here
  },
  isValidMove: function(position){
    // Your Code Here
  },
  checkForVictory: function(){
    // Your Code Here
  },
  makeMove: function(position){
    // Your Code Here
  }
};

// UI //
const ViewEngine = {
  refreshBoardView: function(boardState){
    // Your Code Here
  },
  flashMessage: function(msg){
    // Your Code Here
  },
  clearFlash: function(){
    // Your Code Here
  }
};

// Top-Level Application Control //
const GameController = {
  onClickNewGame: function(event){
    // Your Code Here
  },
  onClickBoardSpace: function(event){
    // Your Code Here
  }
};

window.onload = function(){
  // Your Code Here
};
