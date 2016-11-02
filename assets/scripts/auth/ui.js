'use strict';

const store = require('../store');

const success = (data) => {
  $('#messages').text('success');
  console.log(data);
};
const signInSuccess = (data) => {  //if you have curly braces you can have more than one expression. without, only 1 expression allowed.
  store.user = data.user;
  success(data);
};

const failure = (error) => {
  $('#messages').text('fail');
  console.error(error);
};

module.exports = {
  failure,
  success,
  signInSuccess,
};
