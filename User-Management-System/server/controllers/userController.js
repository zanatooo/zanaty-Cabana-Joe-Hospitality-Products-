const mysql = require('mysql2');

//connection pool
const pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

//view users
exports.view = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err; //not connected
    console.log('connected as id' + connection.threadId);

    //use the connection
    connection.query('SELECT * FROM user', (err, rows) => {
      //releases the connection when finished with it
      connection.release();

      if (!err) {
        res.render('home', { rows });
      } else {
        console.log(err);
      }

      console.log('the data from the user table: \n', rows);
    });
  });
};
