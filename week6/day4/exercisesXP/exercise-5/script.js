function makeJuice(size) {
  const body = document.getElementsByTagName("body").item(0);
  let ingredients = [];
  function addIngredients(first, second, third) {
    ingredients.push(first, second, third);
    console.log(ingredients);
    // body.innerHTML = `The client wants a ${size} juice, containing ${first}, ${second}, ${third}`;
  }
  addIngredients("cola", "ice", "lemon");
  addIngredients("spicy", "banana", "apple");
  function displayJuice() {
    ingredients.join(", ");
    ingredients.forEach((item) => {
        body.innerHTML = `The client wants a ${size} juice, containing ${ingredients} `;
    });
  }

  displayJuice();
}

makeJuice("large");
