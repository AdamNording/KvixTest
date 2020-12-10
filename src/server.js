/**
 * The server can in this instance only take a get request and send back
 * an answear. It is listening to port 5000.
 * @requires JSON-file
 * @requires express
 * @author Adam Nording
 * @date 10/12/2020
 */

var programs = require('../public/programs.json');
const express = require('express');
const app = express();

app.listen(5000, () => console.log("listening at 5000"));

//app.use(express.static('public'));

app.get('/programs', (req, res) => {
    res.send(programs);
});