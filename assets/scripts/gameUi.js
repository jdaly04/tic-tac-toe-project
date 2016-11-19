'use strict';

const store = require('./store');

const createGameSuccess = (data) => {
};

//const onGameStatsSuccess = function(event) {
//  $('#game-stats').text("You've played " + data.games.length + " games.");
//};
const updateGameSuccess = (data) => {
  store.gameData.game= gameData;
}



const failure = (error) => {
  $('#messages').text('fail');
  console.error(error);
};

module.exports = {
  createGameSuccess,
  updateGameSuccess,
  //onGameStatsSuccess,
};
