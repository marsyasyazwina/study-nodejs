// import express from ;express'
const express = require('express');
const { addListener } = require('nodemon');

// instantiate express
const app = express();

// routing menggunakan metode GET
app.get('/',(req, res) =>{
    res.send('Hello World');

});

// tentukan part dari server
app.listen(3000, () => {
    console.log ('Server berjalan di port 3000')
});
