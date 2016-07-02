var models = require('../models');
module.exports = {
  messages: {
    get: function (req, res) {
      var message = {results:[{roomname:'lobby', message:'hi', username:'emily'}]};
      res.send(JSON.stringify(message));
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var data = '';
      console.log(typeof req.body);
      console.log(req.body);
      models.messages.post(req.body);
      // req.on('data', function(datachunk) {
      //   data += datachunk;
      //   console.log(data);
      // });
      // req.on('end', function() {
      //   data = JSON.parse(data);
      //   console.log('hi');
      //   console.log(data);
      //   myDB.postMessage(data);
      // });


    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

