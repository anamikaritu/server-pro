const express = require('express');
const app = express();
const database = require("./config/database");

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 4000;


// database connect
database.connect();


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  res.send('Hello Users!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

