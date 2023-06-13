const express = require('express');

const server = express();

server.use(express.static('public'));

// exercise-1

// const user = { firstname: "John", lastname: "Doe" };

// server.get('/users', (req, res) => {
//     console.log(JSON.stringify(user));
//     res.end(JSON.stringify(user))
// })

// // exercise-2

// server
//   .get("/:id", (req, res) => {
//     res.send(req.params);
//     res.end(req.body.params);
//   })
//   .listen(3000);

  // exercise-3

  server
    .get("/index.html", (req, res) => {
      res.end();
    })
    .listen(3000);