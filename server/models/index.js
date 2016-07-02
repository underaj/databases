var db = require('../db');

module.exports = {
  messages: {
    get: function (res) {
      db.getMessages(res);
    }, // a function which produces all the messages
    post: function (messageObj, res) {
      db.postMessage(messageObj, res);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (userObj, res) {
      db.postUser(userObj, res);
    }
  }
};

