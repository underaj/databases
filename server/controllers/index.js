var models = require('../models');
module.exports = {
  messages: {
    get: function (req, res) {
      var results = [ {roomname: 'lobby', message:'hi', username: 'emily'} ];
      var message = {results: results};
      res.send(JSON.stringify(message));
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

