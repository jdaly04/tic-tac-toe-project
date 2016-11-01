'use strict';
const config = require('../config');
const store = require('../store');

const signUp = (data) =>
  $.ajax({
    url: config.host + '/sign-up',
    method: 'POST',
    data,
  });
  const signIn = (data) =>
    $.ajax({
      url: config.host + '/sign-in',
      method: 'POST',
      data,
    });

  const changePassword = (data) =>
    $.ajax({
      url: config.host + '/change-password/' + store.user.id,
      method: 'POST',
      data,   //we should also add store.user = null (so the token is no longer stored)
      headers: {
        Authorization: 'Token token=' + store.user.token,
      },
    });

    const signOut = () =>   ////we should also add store.user = null (so the token is no longer stored)
      $.ajax({
        url: config.host + '/sign-out' + store.user.id,
        method: 'DELETE',
        headers: {
          Authorization: 'Token token=' + store.user.token,
        }
      })

module.exports = {
  signUp,   //makes it available for use
  signIn,
  changePassword,
  signOut,
};
