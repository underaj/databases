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



exports.postMessage = function(message) {
  console.log('in postmessage');
  connection.connect();
  var room = message.roomname;
  var mes = message.message;
  var user = 1;
  connection.query('INSERT INTO messages SET ?', {message: mes, room: room, 'user_id': user}, function(err, rows, fields) {
    if (err) {
      console.log(err); 
    } else {
    }
  });
};


