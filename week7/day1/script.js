function multiply(arr) {
  let newArr = [];
  console.log(newArr);
  arr.forEach((item) => {
    newArr.push(item * 2);
  });
  return newArr;
}

console.log(multiply([1, 2, 3, 4]));

// map methods

let arr = [1, 2, 3, 4];
let arr2 = arr.map((i) => {
  return i * 2;
});

console.log(arr);
console.log(arr2);

// let obj = {
//     a: 1,
//     b: 2
// }

// let keysArr = Object.keys(obj).map(item => {
//     return item;
// }) // => [a,b]

// Object.values.map(item => {
//     return i * 2;
// })

// Object.entries(item => {
//     // item[0] =>{a} item[1]{1}
// })

// Object.keys => an Array of keys [a,b]
// Object.values => only values[1, 2]
// Object.entries => both [
//     [a, 1],
//     [b,2]
// ]

let users = ["eli", "adam", "galina", "ziv"];

let email = users.map((item) => {
  return item + "@gmail.com";
});

console.log(email);

let arr3 = [1, 2, 3, 4];

let arr4 = arr3.map((x) => {
  return [x * 2];
});

console.log(arr4);

let arr5 = arr3.flatMap((x) => {
  return x;
});

console.log(arr5);

let numbers = [2, 3, 4, 5, 6];

function three(arr) {
  let newArr = [];
  arr.forEach((item) => {
    if (item > 3) {
      return newArr.push(item);
    }
  });
  return newArr;
}

console.log(three(numbers));

let newArr = numbers.filter((item) => {
  return item > 3;
});

console.log(newArr);

const dragon = ["Susi", "Tim", "Jonathan", "Sandy"];

const filterName = dragon.filter((item) => {
  return item.toLowerCase().includes("S".toLowerCase()); // item.startsWith('Sa')
});

console.log(filterName);

const nums = [2, 5, 10, 100];

const total = nums.reduce((total, item) => {
  return total + item;
}, 100);

//console.log(total);

function arrr(n) {
  const arrOfDigit = Array.from(String(n), Number);
  let totalSum = arrOfDigit.reduce((accum, item) => {
    return accum + item;
  });
  let sumOfSum = Array.from(String(totalSum), Number);
  if (totalSum > 2) {
    sumOfSum = sumOfSum.reduce((accum, item) => {
      return accum + item;
    });
  }
  return totalSum.length >= 2 ? totalSum : sumOfSum;
}

// console.log(arrr(16)); // 7
// console.log(arrr(942)); // 15 // 6
// console.log(arrr(132189)); // 24 // 6
// console.log(arrr(493193)); //29 // 11 /2

let bd = [2, 4, 8, 4, 8, 1, 8];

function bdCakeCandles(arr) {
  let maxNum = Math.max(...arr);
  let filter = arr.filter((item) => {
    return item === maxNum;
  });
  return filter.length;
}

console.log(bdCakeCandles(bd));

const find = ["1,2,5,6,7", "2,5,7,8,15"]; // => [2,5,7]

function findIntersection(arr) {
  let arr1 = arr[0].split(",");
  let arr2 = arr[1].split(",");
  let ret = arr1.filter((value) => {
    return arr2.includes(value);
  });
  return ret;
}

console.log(findIntersection(find));

let arrAB = [2, 5];

// const a = arr[0];
// const b = arr[1];

const [a, b] = arr; // defactoring

console.log(a);
console.log(b);

let arrSpread = [...arr, a, b]; // spread operator [...arr]
console.log(arrSpread);

let [c, m, d, ...rest] = [1, 2, 3, 4, 5, 6];

console.log(c);
console.log(m);
console.log(d);
console.log(rest);