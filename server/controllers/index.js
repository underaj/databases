var models = require('../models');
module.exports = {
  messages: {
    get: function (req, res) {
      var results = [ {roomname: 'lobby', message: 'hi', username: 'emily'} ];
      var message = {results: results};
      res.send(JSON.stringify(message));
      // models.messages.get(res);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(typeof req.body);
      models.messages.post(req.body, res);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      models.users.post(req.body, res);
    }
  }
};

