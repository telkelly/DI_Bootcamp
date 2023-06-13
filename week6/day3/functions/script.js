// // function declaration

// function myName(name) {
//   return name;
// }

// // function expression

// const myName = function (name) {
//   return name;
// };

// // arrow function

// const myName = (name) => {
//   return name;
// };

// // local variables

// const local = () => {
//   let x = 10;
// };

// // outer variables

// let x = 10;

// const outer = () => {
//   let x = 11;
//   return x * 2;
// };

// // self-invoking function

// function myName(name) {
//   console.log(name);
// }
// myName("Kelly")(
//   // self-invoking function
//   function (name) {
//     console.log(name);
//   }
// )("Kelly");
// // self-invoking arrow function
// ((name) => {
//   console.log(name);
// })("Kelly");

// nested function

// function outer(x) {
//     function nested(y) {
//         return x * y;
//     }
//     return nested;
// }

// calling it

// const VAT = 2;

// let a = outer(VAT)(6)

// console.log(a);

// nested arrow function -- curryng

const x = (a) => (b) => {
    return a * b;
}

// const x = (a) => {
//     return (b) => {
//         return a * b;
//     }
// }

let y = x(2)(2);

// compose 

const n = (a, b) => (c) => a(b(c));

//      sum1, sum2 => 6 => sum1(sum2(6))
// starts from b(c) == 6 + 1 = 7 == a(b) == 7 * 2 = 14

let sum1 = (num) => num * 2;
let sum2 = (num) => num + 1;

let g = n(sum1, sum2)(6);

console.log(g);