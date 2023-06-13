// function solution(string) {
//     let length = string.length;
//     let foundA = -1;
//     let foundB = -1;

//     for (let i = 0; i < length; i++){
//         if (string[i] === 'a') {
//             foundA = i;
//         } else if (string[i] === 'b') {
//             foundB = i;
//         } if(foundB < foundA !== -1 && foundA !==-1){
//             return false
//         }
//     }
//     return true;
// }
// function solution(S) {
//     let foundB = false;
//     let len = S.length;
//     for (let i = 0; i < len; i++){
//         if (S[i] === 'b') {
//             foundB = true;
//         } else if (foundB === true) {
//             return false
//         }
//     }
//     return true;
// }

// console.log(solution("aabbaa"));
// console.log(solution('aaabbbaa'));
// console.log(solution("bbbbaaaa"));
// console.log(solution("ab"));

// const population = {
//     tokyo: 333333,
//     delhi: 555555,
//     shangai: 999999
// }

// const population2 = [
//   ['tokyo', 333333],
//   ['delhi', 555555],
//   ['shangai', 999999]
// ];

// const population3 = Object.fromEntries(population2); // transfer into object

// console.log(population3);

// const population4 = { ...population };

const population = {
  tokyo: 333333,
  delhi: 555555,
  shangai: 999999,
  datetime: {
    date: 09052024,
    time: 1900,
  },
};

// const population2 = {
//   tokyo: 5,
//   newyork: 555555,
//   moskwa: 999999,
// };

// const population3 = { ...population, ...population2 } // merge 2 objects together
// const population3 = { ...population, tokyo: 3, telaviv:90}; // adding

// console.log(population3);

// const {tokyo, delhi, shaghai, datetime: {date, time} } = population; // we don't care about positions of keys, it iterates and find these keys // destracting /// bun in arr let [b, a] = [1, 2] b = 1, a = 2 -- it depends

// function x({tokyo, delhi}) {
//   // const { tokyo, delhi } = obj;
//   console.log(tokyo, delhi);
// }

// x(population);

const users = {
  user1: { age: 44, name: "picard" },
  user2: { age: 12, name: "sisko" },
  user3: { age: 109, name: "janeway" },
};

const usersKeys = Object.keys(users);
console.log(usersKeys);
const adults = usersKeys
  .filter((key) => users[key].age > 30)
  .map((id) => ({ id, ...users[id] }));
console.log(adults);

class Person{
    constructor() {
        this.name = 'John'
        this.lastName = 'Teller'
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }
}