const express = require('express');
const fs = require('fs');

const app = express();

const port = 5000;

app.get('/', (req, res) => {
    res.set({
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'POST, GET, DELETE, OPTIONS, key',
        'Access-Control-Allow-Methods': 'POST, GET, DELETE, OPTIONS',
    });
    
    fs.readFile('db.json', (err, data) => {
        if (err) return console.log(err);

        res.end(data);
    });
});

app.listen(process.env.PORT || port, () => {
    console.log('Server has been started');
});