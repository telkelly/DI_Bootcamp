// exercise-1

const person = {
  name: "John Doe",
  age: 25,
  location: {
    country: "Canada",
    city: "Vancouver",
    coordinates: [49.2827, -123.1207],
  },
};

const {
  name,
  location: {
    country,
    city,
    coordinates: [lat, lng],
  },
} = person;

console.log(
  `I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`
); // it'll copy the object

// exercise-2

function displayStudentInfo(objUser) {
  return console.log(`Your full name is ${objUser.first} ${objUser.last}`);
}

displayStudentInfo({ first: "Elie", last: "Schoppik" });

// exercise-3

const users = { user1: 18273, user2: 92833, user3: 90315 };

let arr = Object.entries(users);

console.log(arr);

let multiply = Object.keys(users).map((i) => [i, users[i]*2]);

console.log(multiply);

// exercise-4

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person("John");
console.log(typeof member); // object

// exercise-5

class Dog {
  constructor(name) {
    this.name = name;
  }
};

//   // 1
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };

// 2 -- this one, cause it has all correct properties
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

//  // 3
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };

// // 4
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };

// exercise-6

const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

console.log([2] === [2]) // true --- false - why????
console.log({} === {}) // true --- false - why????

object1.number = 4;
console.log(object2.number);
console.log(object3.number);
console.log(object4.number);

// exercise-7

class Animal{
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mamal extends Animal{
  sound(sound) {
    return `${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`
    
  }
}

const farmer = new Mamal('Lily', 'cow', 'brown');

const soundMess = farmer.sound('Mooo')

console.log(soundMess);
