'use strict';

const store = require('../store');


const success = (data) => {
  $('#messages').text('success');
  console.log(data);
};
const signInSuccess = (data) => { //if you have curly braces you can have more than one expression. without, only 1 expression allowed.
  store.user = data.user;
  success(data);
  $('#ch-password').show();
  $('#sign-out-button').show();
  $('#sign-in-button').hide();
  $('#sign-up-button').hide();
  $('#signInModal').modal("hide");
  $('.win').text("Success! Now, click New Game to play!");
};

const changePasswordSuccess = (data) => {
  $('#changePasswordModal').modal("hide");
  $('.win').text("Success! Password changed! Keep playing!");
  console.log(data);
};
const signUpSuccess = (data) => {
  store.token = data.user.token;
  $('#signUpModal').modal("hide");
  $('.win').text("Success! Now, sign in!");
};

const signOutSuccess = () => {
  $('.win').text("You are now logged out! Please sign back in to play!");
  $('#sign-in-button').show();
  $('#sign-up-button').show();
  $('#ch-password').hide();
  $('#sign-out-button').hide();
  $('.box').text('');
  $('.win').text('You are logged out! Please sign up or in to play!');
//  reset.store.gameData.game.cells[index]= '';
  store.user = null;
  store.gameData = null;
};

const failure = (error) => {
  $('.win').text("Problem...Try again!");
  console.error(error);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signUpSuccess,
  changePasswordSuccess,
  signOutSuccess,
};
