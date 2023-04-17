const listPlanet = document.getElementsByClassName('listPlanets')
let planetArr = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

for (let i = 0; i < planetArr.length; i++){
    let newDiv = document.createElement('div');
    listPlanet[0].append(newDiv)
    newDiv.classList = 'planet';
    console.log(newDiv);
    if (planetArr[i] == 'Mercury') {
        newDiv.style.backgroundColor = 'grey';
    }
    if (planetArr[i] == "Venus") {
        newDiv.style.backgroundColor = "brown";
    }
    if (planetArr[i] == "Earth") {
      newDiv.style.backgroundColor = "green";
    }
    if (planetArr[i] == "Mars") {
      newDiv.style.backgroundColor = "orange";
    }
    if (planetArr[i] == "Jupiter") {
        newDiv.style.backgroundColor = "yellow";
    }
    if (planetArr[i] == "Saturn") {
      newDiv.style.backgroundColor = "lightgreen";
    }
    if (planetArr[i] == "Uranus") {
      newDiv.style.backgroundColor = "lightblue";
    }
    if (planetArr[i] == "Neptune") {
      newDiv.style.backgroundColor = "darkblue";
    }
}
listPlanet
console.log(listPlanet.textContent);