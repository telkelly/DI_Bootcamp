// exercise-1

const { log } = require('console');
const script2 = require('./main')

const b = 5;

console.log(script2.largeNumber + 5);

// exercise-2

const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    
    res.end(`My Module is ${script2.largeNumber + 5} <h1>Hi there at the frontend</h1>`, );
})

server.listen(3000, 'localhost', () => {
    console.log('im listenig');
})

// exercise-3

const http2 = require("http");

const server2 = http2.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  res.end(
    script2.formattedDateTime
  );
});

server2.listen(8080, "localhost", () => {
  console.log("im listenig");
});

console.log(script2.formattedDateTime);
