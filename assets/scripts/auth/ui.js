'use strict';

const store = require('../store');

const success = (data) => {
  $('#messages').text('success');
  console.log(data);
};
const signInSuccess = (data) => { //if you have curly braces you can have more than one expression. without, only 1 expression allowed.
  store.user = data.user;
  success(data);
  $('#signInModal').modal("hide");
  $('.win').text("Success! Now, click New Game to play!");
};

const changePasswordSuccess = (data) => {
  $('.win').text("Success! Password changed! Keep playing!");
  console.log(data);
};
const signUpSuccess = (data) => {
  store.token = data.user.token;
  $('#signUpModal').modal("hide");
  $('.win').text("Success! Now, sign in!");
};

const signOutSuccess = (data) => {
  $('.win').text("You are now logged out! You can play, but no stats will save!");

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
