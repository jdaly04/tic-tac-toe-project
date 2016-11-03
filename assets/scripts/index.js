'use strict';

const authEvents= require('./auth/events.js');

$(() => {
  authEvents.addHandlers();  //when your document is fully loaded, then this code will run. the DOM has been
                              // constructed. if you're trying to use an API, check the README doc to kno                            // what the specs are
});
