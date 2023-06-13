// Objects and properties

// let obj = {};
// let obj1 = {
//     name: 'Sara',
//     email:'sara@gmail.com'
// };

// let obj2 = new Object();

// // console.log(obj, obj2);

// obj.name = 'John';
// obj.email = 'john@gmail.com';

// obj2['name'] = 'Marry';
// obj2['email'] = 'mary@gamil.com';

// console.log(obj['email']);
// console.log(obj2.name);

// let a = 'username';
// obj[a] = 'John'; // assigned key for object

// let state = {
//     firstName: '',
//     lastName: '',
//     email: ''
// };

// function handleInput(e) {
//     state[e.target.name] = e.target.value;
// }

// function handleSubmit() {
//     return console.log(state);
// }

let myCar = {};

myCar.brand = "Ford";
myCar.model = "Mustang";
myCar.year = "1992";

function get(obj) {
  console.log(`My car brand ${obj.brand} model ${obj.model} year ${obj.year}`);
}

get(myCar);

let amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100,
};

function checkBasket(item) {
  if (amazonBasket[item]) {
    return amazonBasket[item];
  }
  return "not exist";
}

console.log(checkBasket("floss"));

// by value or by reference

let a = 5;
let b = a;

// changing arr or obj by reference it's changes all arrays/ objs 
// do not change the arr/obj we can clone it by using [...arr] or {...obj}


let user = {
    name: 'Mark', 
    address: {
        city: 'Tel Aviv',
        country: 'Israel',
        zipcode: {
            start: '555',
            end: '666'
        }
    }
}

let newUser = { ...user }

newUser.name = 'Kelly';

console.log(user);
console.log(newUser) // it doesnt clone nested obj so istead we can use next one

let str = JSON.stringify(user); // changing my obj to string
let user2 = JSON.parse(str) // changing srting to obj back

user2.address.city = 'Holon';
user2.name = 'Kelly';

console.log(user2);