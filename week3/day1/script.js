let addressNumber = 100;
let addressStreet = "Eilat";
let country = "Israel";

const globalAddress = `I live in ${addressStreet} ${addressNumber}, ${country}`

console.log(globalAddress);

let birthYear = 2000;
let futureYear = 2024;

let possibleAge = futureYear - birthYear;

console.log(`I will be ${possibleAge} in ${futureYear}`);

let pets = ["cat", "dog", "fish", "rabbit", "cow"];

console.log(pets[1])

pets.push('horse')

console.log(pets)

pets.splice(3, 1)

console.log(pets)

console.log(pets.length)


