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

//const updateGame = (data) =>
//  $.ajax({
//    url: config.host + '/games/:id' + store.sessionId,
//    method: 'PATCH',
//    headers: {
//      Authorization: 'Token token=' + store.user.token,
//    }
//   });

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
  //showGame,
};
