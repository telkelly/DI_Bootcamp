// exercise-1

const sum = (a, b) => a + b;

console.log(sum(5, 5));

// exercise-2

function kgToGram(num) {
  return num * 1000;
}

console.log(kgToGram(1));

const kgToGram2 = function (num) {
  return num * 1000;
};

console.log(kgToGram2(1));

// function declaration invokes before function expression and if i'd use let instead of const i could reassign it

const kgToGram3 = (num) => num * 1000;

// console.log(kgToGram3(1))
  // exercise-3

  (function (numOfChildren, partnersName, geographicLocation, jobTitle) {
    return console.log(
      `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numOfChildren} kids.`
    );
  }
)(10, "Mark", "Israel", "the best programmer in the world");


// exercise-4