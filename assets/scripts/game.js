'use strict';

const store = require('./store.js');

let board = ['', '', '', '', '', '', '', '', ''];
let gameData = {};
//let over = '';

const resetGameBoard = function(){
  for (let i = 0; i < board.length; i++) {
    board[i] = '';
  }
    $('.box').css('pointer-events', 'auto');
};

const updateBoard = function(index, letter){
  store.gameData.game.cells[index] = letter;
};

let player = '';

//let checkWin= function() {


//CHECK WIN:

let checkWin = function () {
   if ((store.gameData.game.cells[0] === "X" && store.gameData.game.cells[1] === "X" && store.gameData.game.cells[2] === "X") ||
      (store.gameData.game.cells[3] === "X" && store.gameData.game.cells[4] === "X" && store.gameData.game.cells[5] === "X")  ||
      (store.gameData.game.cells[6] === "X" && store.gameData.game.cells[7] === "X" && store.gameData.game.cells[8] === "X") ||
      (store.gameData.game.cells[0] === "X" && store.gameData.game.cells[3] === "X" && store.gameData.game.cells[6] === "X") ||
      (store.gameData.game.cells[1] === "X" && store.gameData.game.cells[4] === "X" && store.gameData.game.cells[7] === "X") ||
      (store.gameData.game.cells[2] === "X" && store.gameData.game.cells[5] === "X" && store.gameData.game.cells[8] === "X") ||
      (store.gameData.game.cells[0] === "X" && store.gameData.game.cells[4] === "X" && store.gameData.game.cells[8] === "X") ||
      (store.gameData.game.cells[2] === "X" && store.gameData.game.cells[4] === "X" && store.gameData.game.cells[6] === "X"))

    { $('.win').text("X won!");
      //$('.box').off();
      $('.box').css('pointer-events', 'none');

    }
  else if ((board[0] === "O" && board[1] === "O" && board[2] === "O") ||
     (store.gameData.game.cells[3] === "O" && store.gameData.game.cells[4] === "O" && store.gameData.game.cells[5] === "O")  ||
     (store.gameData.game.cells[6] === "O" && store.gameData.game.cells[7] === "O" && store.gameData.game.cells[8]=== "O") ||
     (store.gameData.game.cells[0] === "O" && store.gameData.game.cells[3] === "O" && store.gameData.game.cells[6] === "O") ||
     (store.gameData.game.cells[1] === "O" && store.gameData.game.cells[4] === "O" && store.gameData.game.cells[7] === "O") ||
     (store.gameData.game.cells[2] === "O" && store.gameData.game.cells[5] === "O" && store.gameData.game.cells[8] === "O") ||
     (store.gameData.game.cells[0] === "O" && store.gameData.game.cells[4] === "O" && store.gameData.game.cells[8] === "O") ||
     (store.gameData.game.cells[2] === "O" && store.gameData.game.cells[4] === "O" && store.gameData.game.cells[6] === "O"))
  {
    $('.win').text("O won!");
    $('.box').css('pointer-events', 'none');

  } else if (store.gameData.game.cells.indexOf('') < 0){
      $('.win').text("Tie Game!");
      $('.box').css('pointer-events', 'none');


  } else {
      return false;
  }
};

const newGame = function () {
 gameData= {
   game: {
     cells: board,
     over: false,
     value: '',
     index: 0,
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
