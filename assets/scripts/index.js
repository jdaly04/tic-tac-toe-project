'use strict';

const authEvents = require('./auth/events.js');
const gameEvents = require('./gameEvents.js');

$(() => {
  authEvents.addHandlers();
  gameEvents.addGameHandlers();
  //when your document is fully loaded, then this code will run. the DOM has been
  // constructed. if you're trying to use an API, check the README doc to kno                            // what the specs are
});
