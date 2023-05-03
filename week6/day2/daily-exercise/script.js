const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

let usernames = [];

Object.keys(gameInfo).forEach((key) => {
  usernames.push(`${gameInfo[key].username}!`);
});

let winners = [];

Object.keys(gameInfo).forEach((key) => {
  if (gameInfo[key].score > 5) {
    winners.push(gameInfo[key].username);
  }
});

//console.log(winners);

Object.keys(gameInfo).forEach((key) => {
    console.log(gameInfo[key].score);
});
