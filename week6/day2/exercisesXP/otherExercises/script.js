// exercise-2

const winBattle = () => {
    return true;
}

let experiencePoints = winBattle ? 10 : 1;

console.log(experiencePoints);

// exrcise-3

const isString = (value) => {
    let ret = (typeof value === 'string') ? true : false;
    return ret;
}

console.log(isString("hello")); 
console.log(isString([1, 2, 4, 0]));

// exercise-4

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

function displayColors() {
    
}

colors.forEach((item, index) => {
    console.log(`${index + 1}# choice is ${item}`)
})

if (colors.includes('Violet')) {
    console.log('Yeah');
} else {
    console.log('No');
}

// exercise-5
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((item, index) => {
    let position = index + 1;
    let indicator = (position % 100 >= 11 && position % 100 <= 13 ) ? ordinal[0] : ordinal[position % 10] || ordinal[0];
    console.log(`${position}${indicator} choice is ${item}`);
})