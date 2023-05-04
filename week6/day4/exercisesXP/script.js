// exercise-1

const sum = (a, b) => a + b;

console.log(sum(5, 5));

// exercise-2

function kgToGram(num) {
    return num * 1000;
}

console.log(kgToGram(1));


const kgToGram2 = function(num) {
  return num * 1000;
}

console.log(kgToGram2(1));

// function declaration invokes before function expression 

const kgToGram3 = num => num * 1000;

console.log(kgToGram3(1))