'use strict';

const gameApi = require('./gameApi');
const gameUi = require('./gameUi');
const gameLogic = require('./game.js');
const store = require('./store.js');

//const gameLogic = require('./game.js');

const onCreateGame = function(event) {
  console.log('HAPPENING');
  if (store.user) {
    gameLogic.newGame();
    event.preventDefault();
    gameApi.createGame(store.gameData)
      .then(gameUi.createGameSuccess)
      .catch(gameUi.failure);
  }
};

const addGameHandlers = () => {
  $('#new-game').on('click', onCreateGame);
};

module.exports = {
  addGameHandlers,
  onCreateGame,
};
//const onUpdateGame = function (index, value, over) {
//  event.preventDefault();
//  let data = getFormFields(this); //where is this data coming from
//  api.signUp(data)
//    .then(ui.success);
//    .catch(ui.failure);
//};
