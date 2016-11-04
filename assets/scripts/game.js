'use strict';


let board = ['', '', '', '', '', '', '', '', ''];
let player = '';
//let checkWin= function() {

//CHECK WIN ROWS:

let checkWin = function () {
   if ((board[0] === "X" && board[1] === "X" && board[2] === "X") ||
      (board[3] === "X" && board[4] === "X" && board[5] === "X")  ||
      (board[6] === "X" && board[7] === "X" && board[8] === "X") ||
      (board[0] === "X" && board[3] === "X" && board[6] === "X") ||
      (board[1] === "X" && board[4] === "X" && board[7] === "X") ||
      (board[2] === "X" && board[5] === "X" && board[8] === "X") ||
      (board[0] === "X" && board[4] === "X" && board[8] === "X") ||
      (board[2] === "X" && board[4] === "X" && board[6] === "X"))
    {

      console.log("X Won!");
    }
  if ((board[0] === "O" && board[1] === "O" && board[2] === "O") ||
     (board[3] === "O" && board[4] === "O" && board[5] === "O")  ||
     (board[6] === "O" && board[7] === "O" && board[8]=== "O") ||
     (board[0] === "O" && board[3] === "O" && board[6] === "O") ||
     (board[1] === "O" && board[4] === "O" && board[7] === "O") ||
     (board[2] === "O" && board[5] === "O" && board[8] === "O") ||
     (board[0] === "O" && board[4] === "O" && board[8] === "O") ||
     (board[2] === "O" && board[4] === "O" && board[6] === "O"))
  {
    console.log("O Won!");

  } else if ((board[0] !== "" && board[1] !== "" && board[2] && board[3]!== "" && board[4] !== "" && board[5] !== "" && board[6] !== "" &&
            board[7] !== "" && board[8] !== "" && board[9] !== ""))
{
}
};



//let currentPlayer = function() {
  //if(player ==='1'){
    //player = '2';
//  }
  //else {
  //  player = '1';
//  }
//};

//let gameMove = function () {
//  if (currentPlayer === '1') {

//  }
//};

module.exports = {
  board,
  player,
  checkWin,
};
//table cells
//array for game board
//database
//let curPlayer = 'X';
//const board = ["sq1", "sq2", "sq3", "sq4", "sq5", "sq6", "sq7", "sq8", "sq9"];






//let checkWinner = function();
  //checks if x wins across, diagonally or down.
  //checks if o wins across, diagnoally or down.

// need to inhibit putting x or o in an occupied square
// need

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
//$(document).ready(function() {
//$('.sq6').on( "click", function() {
//alert('This is where X would go!')
//});)
//});
