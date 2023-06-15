const fs = require("fs");

fs.readFile("RightLeft.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    let position = 0;
    let arr = data.split("");
    for (item of arr) {
      if (item === ">") {
        position++;
      } else {
        position--;
      }
    }
    console.log(arr);
    console.log("Final position", position);
  }
});

fs.readFile("RightLeft.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    let arr = data.split("");

    let position = 0;
    let steps = 0;
    let foundNegative = false;
    for (item of arr) {
      if (item === ">") {
        position++;
      } else {
        position--;
      }
      steps++;

      if (position === -1 && !foundNegative) {
        console.log("Position number:", steps);
        foundNegative = true;
      }
    }
  }
});
