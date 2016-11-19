'use strict';

const store = require('./store');

const createGameSuccess = (gameData) => {
  store.gameData.game = gameData.game;
};

//const onGameStatsSuccess = function(event) {
//  $('#game-stats').text("You've played " + data.games.length + " games.");
//};
const updateGameSuccess = (data) => {
  store.gameData.game = gameData.game;
};



const failure = (error) => {
  $('#messages').text('fail');
  console.error(error);
};

module.exports = {
  createGameSuccess,
  updateGameSuccess,
  //onGameStatsSuccess,
};
