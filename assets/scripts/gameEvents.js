'use strict';

const gameApi = require('./gameApi');
const gameUi = require('./gameUi');
const gameLogic = require('./game.js');
const store = require('./store.js');

//const gameLogic = require('./game.js');

const onCreateGame = function(event) {
  if (store.user) {
    gameLogic.newGame();
    event.preventDefault();
    gameApi.createGame(store.gameData)
      .then(gameUi.createGameSuccess)
      .catch(gameUi.failure);
  }
};

const onUpdateGame = function () {
 let data = {
   "game": {
     "cell": {
       "index": store.gameData.game.index,
       "value": store.gameData.game.value,
     },
     "over": store.gameData.game.over,
   }
 };
  gameApi.updateGame(data)
    .then(gameUi.createGameSuccess)
    .catch(gameUi.failure);
 };

const addGameHandlers = () => {
  $('#new-game').on('click', onCreateGame);
  //$('#game-stats').on('click', onGameStats); //need to create function.
};

module.exports = {
  addGameHandlers,
  onCreateGame,
  onUpdateGame,
};
