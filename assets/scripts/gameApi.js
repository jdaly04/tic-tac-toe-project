'use strict';
const config = require('./config');
const store = require('./store');


const createGame = function (data) {
  return $.ajax({
    url: config.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data,
  });
};

const updateGame = (data) =>
 $.ajax({
   url: config.host + '/games/' + store.gameData.game.id,
   method: 'PATCH',
   headers: {
     Authorization: 'Token token=' + store.user.token,
   },
   data,
  });

//  const indexGame = (data) =>
//    $.ajax({
//      url: config.host + '/games',
//      method: 'GET',
//      headers: {
//        Authorization: 'Token token=' + store.user.token,
//      }
//    });

//  const showGame = (data) =>
//    $.ajax({
//      url: config.host + '/games/:id',
//      method: 'GET',
//      headers: {
//        Authorization: 'Token token=' + store.user.token,
//      }
//    });








module.exports = {
  //updateGame,
  //indexGame,
  createGame,
  updateGame,
  //showGame,
};
