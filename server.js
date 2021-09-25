//require express
const express = require('express');
//set express() to a variable
const app = express();
//set variable port to 3000
const port = 3000;

//home get route
app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!');
});

//setting to listen port 3000 with message
app.listen(port, () => {
    console.log("listening",port);
});