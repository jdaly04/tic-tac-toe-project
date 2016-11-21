'use strict';

const store = require('./store');

const createGameSuccess = (gameData) => {
  store.gameData.game = gameData.game;
};

const getGamesSuccess = (gameData) => {
  $('.win').text('You have played ' + gameData.games.length + ' games.');
};

const updateGameSuccess = () => {
  store.game = store.game;
};

const failure = (error) => {
  console.error(error);
};



//const failure = (error) => {
//  $('#messages').text('fail');
//  console.error(error);
//};

module.exports = {
  createGameSuccess,
  updateGameSuccess,
  getGamesSuccess,
  failure,
};
