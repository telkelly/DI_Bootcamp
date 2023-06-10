const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>This is an HTML tag</h1>')
}).listen(3000)
