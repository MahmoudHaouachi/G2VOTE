var mysql = require('mysql');
//connection to DB
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'g2vote'
})

//connection test
connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
});

module.exports = connection;
