const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello port')
})

server.listen(3000, "localhost", () => {
    console.log('im on port');
});