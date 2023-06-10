const http = require('http');
const user = {
  firstname: "John",
  lastname: "Doe",
};

http.createServer((req, res) => {
    res.end(JSON.stringify(user));
}).listen(8080, 'localhost', () => {
    console.log('listening 8080');
})