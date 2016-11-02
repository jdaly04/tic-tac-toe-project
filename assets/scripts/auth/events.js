'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.signUp(data)
    .then(ui.success)
    .catch(ui.failure);
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.failure);
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.changePassword(data)
    .then(ui.success)
    .catch(ui.failure);
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
    .then(ui.success)
    .catch(ui.failure);
};

const onClickSq1 = function () {
  $("#sq1").text('X');
};

const onClickSq2 = function () {
  $("#sq2").text('O');
};

const onClickSq3 = function () {
  $("#sq3").text('O');
};

const onClickSq4 = function () {
  $("#sq4").text('O');
};

const onClickSq5 = function () {
  $("#sq5").text('X');
}

const onClickSq6 = function () {
  $("#sq6").text('X');
}

const onClickSq7 = function () {
  $("#sq7").text('O');
}

const onClickSq8 = function () {
  $("#sq8").text('O');
}

const onClickSq9 = function () {
  $("#sq9").text('O');
}



const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('click', onSignOut);
  $('#sq1').on('click', onClickSq1);
  $('#sq2').on('click', onClickSq2);
  $('#sq3').on('click', onClickSq3);
  $('#sq4').on('click', onClickSq4);
  $('#sq5').on('click', onClickSq5);
  $('#sq6').on('click', onClickSq6);
  $('#sq7').on('click', onClickSq7);
  $('#sq8').on('click', onClickSq8);
  $('#sq9').on('click', onClickSq9);

};

module.exports = {
  addHandlers,
};
