var programs = require('./programs.json');
const express = require('express');
const app = express();

app.listen(5000, () => console.log("listening at 5000"));

//app.use(express.static('./src/index.js'));

app.get('/', (req, res) => {
    res.json(programs);
});