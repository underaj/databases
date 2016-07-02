var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat'
});

exports.postMessage = function(messageObj) {
  connection.connect();
  var room = messageObj.roomname;
  var message = messageObj.message;
  var username = messageObj.username;
  var cb = function(userID) {
    connection.query('INSERT INTO messages SET ?', {message: message, room: room, 'user_id': userID}, function(err, row, fields) {
      if (err) {
        console.log(err); 
      } else {
      }
    });
  };
  // do a get from users table, check if exist
  // if exists get the user id
  // if does not exist, insert the username into user table, get the user id
  // use user id in messages table
  connection.query('SELECT u_id FROM users WHERE name = ?', username, function(err, rows) {
    if (err) {
    } else {
      if (rows.length === 0) {
        connection.query('INSERT INTO users SET ?', {name: username}, function(err, result, fields) {
          if (err) {
            console.log('cant insert name');
          } else {
            cb(result.insertId);
          }
        });
      } else {
        cb(rows[0].u_id);
      }
    }
  });
};


