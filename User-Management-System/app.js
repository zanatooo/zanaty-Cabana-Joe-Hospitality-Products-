const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//parsing middleware

app.use(bodyParser.urlencoded({ extended: false }));

//parse application/json
app.use(bodyParser.json());

//static files
app.use(express.static('public'));

//templating engine uses view and  layout folder as a default
app.engine('hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

//connection port
const pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

//connect to db
pool.getConnection((err, connection) => {
  if (err) throw err; //not connected
  console.log('connected as id ' + connection.threadId);
});

const route = require('./server/routes/user');
app.use('/', route);

app.listen(port, () => console.log(`listening on port ${port}`));
