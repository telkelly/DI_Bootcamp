const expess = require("express");
const cors = require("cors");
const app = expess();
const bd = require("body-parser");

let Parser = require("rss-parser");
let parser = new Parser();

(async () => {
  let feed = await parser.parseURL("https://thefactfile.org/feed/");
  console.log(feed.title);

  feed.items.forEach((item) => {
    console.log(item.title + ":" + item.link);
  });
})();

app.use(expess.urlencoded({ extended: false }));
app.use(cors());

app.listen(3000, (req, res) => {
    console.log("listen");
})
