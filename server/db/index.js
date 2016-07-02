var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3000,
  user: 'root',
  password: '',
  database: 'chat'
});

exports.postMessage = function(message) {
  connection.connect();
  var room = message.roomname;
  var mes = message.message;
  var user = 1;
  console.log(mes);
  connection.query('INSERT INTO messages (message, room, user_id) VALUE (' + mes + ',' + room + ',' + user + ') ?', function(err, rows, fields) {
  if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
  });
  connection.end();
};


