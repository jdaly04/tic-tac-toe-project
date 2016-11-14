'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');
const gameUi = require('../game.js');

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.signUp(data)
    .then(ui.success)
    .catch(ui.failure);
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.failure);
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.changePassword(data)
    .then(ui.success)
    .catch(ui.failure);
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
    .then(ui.success)
    .catch(ui.failure);
};

// BEGIN GAME EVENTS -- Need to move to different file!

let sqIds = ["sq1", "sq2", "sq3", "sq4", "sq5", "sq6", "sq7", "sq8", "sq9"];
const onClickSq = function () {
  if(gameUi.player === '' || gameUi.player === '1') {
    $(this).text('X');
    gameUi.updateBoard(sqIds.indexOf($(this).attr('id')), 'X');
    gameUi.player = "2";
  } else {
   $(this).text('O');
   gameUi.updateBoard(sqIds.indexOf($(this).attr('id')), 'O');
    gameUi.player = '1';
  }
  gameUi.checkWin();
};

const createGame = function() {
  $('.box').text('');
  $('.win').text('');
  gameUi.resetGameBoard();
  gameUi.player = '';

};




const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('click', onSignOut);
  $('#sq1').on('click', onClickSq);
  $('#sq2').on('click', onClickSq);
  $('#sq3').on('click', onClickSq);
  $('#sq4').on('click', onClickSq);
  $('#sq5').on('click', onClickSq);
  $('#sq6').on('click', onClickSq);
  $('#sq7').on('click', onClickSq);
  $('#sq8').on('click', onClickSq);
  $('#sq9').on('click', onClickSq);
  $('.create-game').on('click', createGame);
};

module.exports = {
  addHandlers,
};
