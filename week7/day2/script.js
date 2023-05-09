// exercise-1
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits]; // ['bread', "carrot", "potato", 'chicken', "apple", "orange"]
console.log(result);

const country = "USA";
console.log([...country]); // ["U", "S", "A"];


let newArray = [...[,,]];
console.log(newArray); // [[]]

// exercise-2

const users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

let welcomeFirstName = users.map((i) => {
    return 'Hello ' + i.firstName;
})

console.log(welcomeFirstName);

let onlyFullStack = users.filter((i) => {
    if (i.role == 'Full Stack Resident') {
        return i;
    }
})

console.log(onlyFullStack);


let bonus = users.filter((i)=>{
    if (i.role == 'Full Stack Resident'){
        return users.map((i) => {
             i.lastName;
        })
    }
})

console.log(bonus);