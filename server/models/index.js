var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      db.connection.query('SELECT m.m_id,m.message, m.roomname, u.username FROM messages m INNER JOIN users u ON (u.u_id = m.user_id)', function(error, rows) {
        if (error) {
          console.log('error here');
        } else {
          var results = rows.map(function(row) {
            return {objectId: row.m_id, message: row.message, roomname: row.roomname, username: row.username};
          });
          var body = {results: results};
          cb(body);
        }
      });
    }, // a function which produces all the messages
    post: function (messageObj, callback) {
      var room = messageObj.roomname;
      var message = messageObj.message;
      var username = messageObj.username;
      var insertTo = function(userID) {
        db.connection.query('INSERT INTO messages SET ?', {message: message, roomname: room, 'user_id': userID}, function(err, row, fields) {
          if (err) {
            console.log(err); 
          } else {
            callback();
          }
        });
      };

      db.connection.query('SELECT u_id FROM users WHERE username = ?', username, function(err, rows) {
        if (err) {
          console.log('problem here');
        } else {
          if (rows.length === 0) {
            db.connection.query('INSERT INTO users SET ?', {username: username}, function(err, result, fields) {
              if (err) {
                console.log('cant insert name');
              } else {
                insertTo(result.insertId);
              }
            });
          } else {
            insertTo(rows[0].u_id);
          }
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (userName, sendResponse) {
      var username = userObj.username;
      db.connection.query('SELECT u_id FROM users WHERE username = ?', username, function(err, rows) {
        if (err) {
          console.log(err);
        } else {
          if (rows.length === 0) {
            db.connection.query('INSERT INTO users SET ?', {username: username}, function(err, result, fields) {
              if (err) {
                console.log('cant insert name');
              } else {
                sendResponse();
              }
            });
          } else {
            sendResponse();
          }
        } 
      });
    }
  }
};

