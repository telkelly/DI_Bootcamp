// exercise-2

const winBattle = () => {
  return true;
};

let experiencePoints = winBattle ? 10 : 1;

console.log(experiencePoints);

// exrcise-3

const isString = (value) => {
  let ret = typeof value === "string" ? true : false;
  return ret;
};

console.log(isString("hello"));
console.log(isString([1, 2, 4, 0]));

// exercise-4

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

function displayColors() {}

colors.forEach((item, index) => {
  console.log(`${index + 1}# choice is ${item}`);
});

if (colors.includes("Violet")) {
  console.log("Yeah");
} else {
  console.log("No");
}

// exercise-5
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((item, index) => {
  let position = index + 1;
  let indicator =
    position % 100 >= 11 && position % 100 <= 13
      ? ordinal[0]
      : ordinal[position % 10] || ordinal[0];
  console.log(`${position}${indicator} choice is ${item}`);
});

// exercise-6

let bankAmount = 5000;
const VAT = 0.17;
const details = ["+200", "-100", "+146", "+167", "-2900"];

details.forEach((item) => {
  let expense = parseFloat(item);
  if (expense < 0) {
      expense += expense * VAT;
      console.log(expense);
  } else {
      item = expense.toFixed(2);
      console.log(expense);
  }
});

const totalExpenses = details.reduce(
  (acc, expense) => acc + parseFloat(expense),
  0
);

bankAmount -= totalExpenses;

console.log(`Bank amount at the end of the month: ${bankAmount.toFixed(2)}`);
