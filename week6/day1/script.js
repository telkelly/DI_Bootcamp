// let question = prompt("What is your year birth?");

// let answer = Number(question);

// let alert =
//   answer < 2000
//     ? console.log("You live in the Middle Age")
//     : console.log("You are in the 21st century");

// let operator = "+";

// const calculator = (a, b) => {
//  return operator === "+"
//     ? a + b
//     : operator === "-"
//     ? a - b
//     : operator === "*"
//     ? a * b
//     : operator === "/"
//     ? a / b
//     : null;
// };

// console.log(calculator(5, 4, "+"));

const numbers = [10, 11, 12, 15, 20];

const evenTrue = () => {
  for (item in numbers) {
    if (item % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
};

console.log(evenTrue());

const even = numbers.some((item) => item % 2 === 0);

const every = numbers.every((item) => item % 2 === 0);

console.log(every);

const includes = (item) => {
  for (num in numbers) {
    if (numbers[num] == item) {
      return true;
    } else {
      return false;
    }
  }
};

let exist = numbers.includes(15);

console.log(exist);

// let card = "4558568098763456";

// let ret = card.padStart(4, '*')

// console.log(ret)

// const getFourNum = (num) => {
//   let fourLast = num.slice(-4);
//   let start = "";
//   for (let i = 0; i < num.length -4; i++) {
//       start += '*';
//   }
//     return start + fourLast;
// };

// getFourNum(card);

// write a function that return 4 digit of credit card number
// pad with * at the begining
// 458023457768890
// ***********8890
// let str = '050'
// let ret = str.padStart(3,'0')
// let ret = str.padEnd(3,'0')
// console.log(ret);

const padStart = (number) => {
  let last4digit = number.slice(-4);
  return last4digit.padStart(number.length, '*')
  // let start = '';
  // for (let i = 0; i < number.length-4; i++) {
  //   start += '*';
  // }
  // return start + last4digit;
}
console.log(padStart('458023457768890'));


