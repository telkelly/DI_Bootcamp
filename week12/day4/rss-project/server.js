const express = require("express");
const cors = require("cors");
const app = express();
const bd = require("body-parser");

let Parser = require("rss-parser");
let parser = new Parser();

app.get("/feed", async (req, res) => {
  try {
    const feed = await parser.parseURL("https://thefactfile.org/feed/");

    res.send(feed); 
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving RSS feed");
  }
});

app.use(express.urlencoded({ extended: false }));
app.use(bd.json())
app.use(cors());
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./public/pages");

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/search", (req, res) => {
  res.render("pages/search");
});

app.listen(3000, () => {
    console.log("listen");
})
