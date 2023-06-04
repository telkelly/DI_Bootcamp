const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        req.end('<h1>Home</h1>')
    } else if (req.url == "/about") {
        req.end("<h1>About</h1>");
    } else {
        req.end('<h1>404 page not found</h1>')
    }
})

server.listen(3001, () => {
    console.log('run on 3001');
})