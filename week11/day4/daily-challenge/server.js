const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static("public"));
app.use(express.json()) // upgrade express body parser

app.get('/aboutMe/:hobby', (req, res) => {
    let getHobby = req.params.hobby;

    if (typeof getHobby === "string") {
      console.log(res.send(getHobby));
    } else {
      res.status(404).send({ msg: "Invalid hobby" });
    }
})

app.get("/pic", (req, res) => {
  res.send(
    '<img src="https://i.etsystatic.com/27543797/r/il/473f4a/3380521289/il_570xN.3380521289_6c3h.jpg"/>'
  );
});

app.get("/form", (req, res) => {
    res.sendFile("public/form.html", { root: __dirname });
    console.log(req.query.email);
});

app.post("/formData", (req, res) => {
    console.log(req.body);
    const email = req.body.email;
    const message = req.body.message;

    res.send(`${email} sent you the message "${message}"`)
});



app.listen(3000, () => {
    console.log('listening on 3000');
})
