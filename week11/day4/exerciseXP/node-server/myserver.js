const http = require('http');

const server = http.createServer((req, res) => {
     const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Server</title>
    </head>
    <body>
      <h1>This is my first response</h1>
      <h2>This is my second response</h2>
      <p>This is my third response</p>
    </body>
    </html>
  `;
    res.end(html)
})

server.listen(3000, "localhost", () => {
    console.log('im on port');
});