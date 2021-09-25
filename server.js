//require express
const express = require('express');
//set express() to a variable
const app = express();
//set variable port to 3000
const port = 3000;
//to be required by server from database (/models/drinks.js)
const drinks = require("./models/drinks");

//home get route
app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!');
});

//route to display drinks as json in browser
app.get('/drinks', (req, res) => {
    res.send(drinks);
})


//setting to listen port 3000 with message
app.listen(port, () => {
    console.log("listening",port);
});