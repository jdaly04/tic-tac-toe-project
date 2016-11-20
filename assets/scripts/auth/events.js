'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
//const gameApi = require('../gameApi');
const api = require('./api');
const ui = require('./ui');
const gameLogic = require('../game.js');
const store = require('../store.js');
const gameEvents = require('../gameEvents.js');


const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.signUp(data)
    .then(ui.signUpSuccess)
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
  if(gameLogic.player === '' || gameLogic.player === '1') {
    if (store.gameData.game.cells[sqIds.indexOf($(this).attr('id'))] === '') {
    $(this).text('X');
    gameLogic.updateBoard(sqIds.indexOf($(this).attr('id')), 'X');
    gameLogic.player = "2";
    gameEvents.onUpdateGame(sqIds.indexOf($(this).attr('id')), 'X');
    }
  } else {
    if (store.gameData.game.cells[sqIds.indexOf($(this).attr('id'))] === '') {
      $(this).text('O');
      gameLogic.updateBoard(sqIds.indexOf($(this).attr('id')), 'O');
      gameLogic.player = '1';
      gameEvents.onUpdateGame(sqIds.indexOf($(this).attr('id')), 'O');
    }
  }
  gameLogic.checkWin();

};

const clickCreateGame = function() {
  $('.box').text('');
  $('.win').text('');
  gameLogic.resetGameBoard();
  gameLogic.player = '';

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
  $('#new-game').on('click', clickCreateGame);
};

module.exports = {
  addHandlers,
  onClickSq,
  clickCreateGame,
  onSignOut,
  onSignIn,
  onSignUp,
};
