'use strict';

const gameApi = require('./gameApi');
const gameUi = require('./gameUi');
const gameLogic = require('./game.js');
const store = require('./store.js');
//const events = require('../events.js');


const onCreateGame = function(event) {
  event.preventDefault();
  if (store.user) {
    gameLogic.newGame();
    gameApi.createGame(store.gameData)
      .then(gameUi.createGameSuccess)
      .catch(gameUi.failure);
  }
};

const onUpdateGame = function(index, letter) {
  let data = {
    "game": {
      "cell": {
        "index": index,
        "value": letter,
      },
      "over": 'false',
    }
  };
  gameApi.updateGame(data)
    .then(gameUi.updateGameSuccess) //changed "create" to "update"
    .catch(gameUi.failure);
};

const onGetGames = function(event) {
  event.preventDefault();
  gameApi.indexGame(store.gameData)
    .then(gameUi.getGamesSuccess)
    .catch(gameUi.failure);
};


const addGameHandlers = () => {
  $('#new-game').on('click', onCreateGame);
  $('#game-stats').on('click', onGetGames);
};

module.exports = {
  addGameHandlers,
  onCreateGame,
  onUpdateGame,
  onGetGames,
};
