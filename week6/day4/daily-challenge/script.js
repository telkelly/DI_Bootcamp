let client = "Betty";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "35$",
  other: {
    payed: false,
    meansOfPayment: ["cash", "creditCard"],
  },
};

const displayGroceries = () => {
    groceries.fruits.forEach((item) => {
        console.log(item);
    })
}

displayGroceries()

const cloneGroceries = () => {
    let user = client;
    console.log(user);

    let shopping = groceries;
    console.log(shopping);
}

cloneGroceries()