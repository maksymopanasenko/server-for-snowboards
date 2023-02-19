const express = require('express');
const app = express();

const port = 5000;


const data = `[
      {
        "img": "img/snowboards/board_1.png",
        "alt": "snowboard_1",
        "name": "Teddy Horror",
        "number": "22-500",
        "price": 142,
        "available": true
      },
      {
        "img": "img/snowboards/board_2.png",
        "alt": "snowboard_2",
        "name": "Urban Sharp",
        "number": "22-501",
        "price": 142,
        "available": false
      },
      {
        "img": "img/snowboards/board_3.png",
        "alt": "snowboard_3",
        "name": "Neon Glass",
        "number": "22-503",
        "price": 150,
        "available": true
      },
      {
        "img": "img/snowboards/board_4.png",
        "alt": "snowboard_4",
        "name": "Rainbow Ghetto",
        "number": "22-504",
        "price": 145,
        "available": true
      },
      {
        "img": "img/snowboards/board_5.png",
        "alt": "snowboard_5",
        "name": "The Hate",
        "number": "22-505",
        "price": 145,
        "available": true
      },
      {
        "img": "img/snowboards/board_6.png",
        "alt": "snowboard_6",
        "name": "Black And White",
        "number": "22-506",
        "price": 137,
        "available": true
      }
    ]`;

app.get('/', (req, res) => {
    res.set({
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'POST, GET, DELETE, OPTIONS, key',
        'Access-Control-Allow-Methods': 'POST, GET, DELETE, OPTIONS',
    });
    res.end(data);
})


app.listen(process.env.PORT || port, () => {
    console.log('Server has been started');
});