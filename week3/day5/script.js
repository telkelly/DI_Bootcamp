for (let i = 0; i <= 15; i++) {
  if (i % 2 == 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

let names = ["john", "sarah", 23, "Rudolf", 34];

for (let i = 0; i < names.length; i++) {
  if (typeof names[i] != "string") {
    if (names[i][0] != names[i][0].toUpperCase()) {
      let upper =
        names[i][0].toUpperCase() + names[i].slice(1, names[i].length);
    }
  } else {
    console.log(names[i]);
  }
}
