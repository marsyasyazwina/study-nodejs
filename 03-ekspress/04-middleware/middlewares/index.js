// require dotenv
require("dotenv").config();

// import express
const express = require('express');
//import body-parser
const bodyParser = require('body-parser');

// instantion express
const app = express();

// Middleware pertama yakni body-parser

app.use(bodyParser.json());


//port
app.listen(process.env.PORT, () => {
  console.log('Server berjalan di port $(process.env.PORT)');
});