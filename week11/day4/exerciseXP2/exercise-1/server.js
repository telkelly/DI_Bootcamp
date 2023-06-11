const express = require('express');

const server = express();

const user = { firstname: "John", lastname: "Doe" };

server.get('/users', (req, res) => {
    console.log(JSON.stringify(user));
    res.end(JSON.stringify(user))
}).listen(3000)