'use strict';

const gameApi = require('./gameApi');
const gameUi = require('./gameUi');
const gameLogic = require('./game.js');
const store = require('./store.js');
//const events = require('../events.js');


const onCreateGame = function(event) {
  if (store.user) {
    gameLogic.newGame();
    event.preventDefault();
    gameApi.createGame(store.gameData)
      .then(gameUi.createGameSuccess)
      .catch(gameUi.failure);
  }
};

const onUpdateGame = function (index, letter) {
 let data = {
   "game": {
     "cell": {
       "index": index,
       "value": letter,
     },
     "over": store.game.over,
   }
 };
  gameApi.updateGame(data)
    .then(gameUi.updateGameSuccess) //changed "create" to "update"
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
