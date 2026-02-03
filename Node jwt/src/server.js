const express = require('express');
const app = express();
const port = 3000;

const dotenv = require('dotenv');

dotenv.config(); // load .env variables

const mongoose = require('mongoose');




app.get('/', (req, res) => {
  res.send('Hello World!');
});




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});