'use strict';

const store = require('./store.js');

let board = ['', '', '', '', '', '', '', '', ''];
let gameData = {};

const resetGameBoard = function(){
  // reset gameboard
  //iterate
  for (let i = 0; i < board.length; i++) {
    board[i] = '';
  }

};

const updateBoard = function(index, letter){
  store.gameData.game.cells[index] = letter;
};

let player = '';

//let checkWin= function() {


//CHECK WIN:

let checkWin = function () {
   if ((board[0] === "X" && board[1] === "X" && board[2] === "X") ||
      (board[3] === "X" && board[4] === "X" && board[5] === "X")  ||
      (board[6] === "X" && board[7] === "X" && board[8] === "X") ||
      (board[0] === "X" && board[3] === "X" && board[6] === "X") ||
      (board[1] === "X" && board[4] === "X" && board[7] === "X") ||
      (board[2] === "X" && board[5] === "X" && board[8] === "X") ||
      (board[0] === "X" && board[4] === "X" && board[8] === "X") ||
      (board[2] === "X" && board[4] === "X" && board[6] === "X"))
    { $('.win').text("X won!");
      return true;
    }
  else if ((board[0] === "O" && board[1] === "O" && board[2] === "O") ||
     (board[3] === "O" && board[4] === "O" && board[5] === "O")  ||
     (board[6] === "O" && board[7] === "O" && board[8]=== "O") ||
     (board[0] === "O" && board[3] === "O" && board[6] === "O") ||
     (board[1] === "O" && board[4] === "O" && board[7] === "O") ||
     (board[2] === "O" && board[5] === "O" && board[8] === "O") ||
     (board[0] === "O" && board[4] === "O" && board[8] === "O") ||
     (board[2] === "O" && board[4] === "O" && board[6] === "O"))
  {
    $('.win').text("O won!");
    return true;
  } else if (board.indexOf('') < 0){
      $('.win').text("Tie Game!");
      return true;
  } else {
      return false;
  }
};

const newGame = function () {
  gameData= {
    game: {
      cells: board,
      over: false,
      player_x: {
        id: store.user_id,
        email: store.user.email
      },
      player_o: {}
    }

  };
  store.gameData = gameData;
};


module.exports = {
  resetGameBoard,
  updateBoard,
  board,
  player,
  checkWin,
  newGame,
};
