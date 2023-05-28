const mainDiv = document.getElementsByClassName("main").item(0);
const loader = document.getElementById("loading");

function displayLoader() {
  loader.classList.add("display");
}

function hideLoader() {
  return loader.classList.remove("display");
}

async function getRandom() {
  mainDiv.innerHTML = "";

  const randomIndex = Math.floor(Math.random() * 10);
  try {
    displayLoader();
    const starFetch = await fetch(
      `https://www.swapi.tech/api/people/${randomIndex}`
    );
    const starData = await starFetch.json();
    const finalData = await starData.result.properties;

    const starFetchPlanet = await fetch(
      `https://www.swapi.tech/api/planets/${randomIndex}`
    );
    const starPlanetData = await starFetchPlanet.json();
    const finalPlanetData = await starPlanetData.result;
    hideLoader();
    const newDiv = document.createElement("div");
    const nameText = document.createElement("p");
    const genderText = document.createElement("p");
    const birthYearText = document.createElement("p");
    const homeWorldText = document.createElement("p");

    append(nameText, finalData.name, newDiv);
    append(genderText, finalData.gender, newDiv);
    append(birthYearText, finalPlanetData.properties.name, newDiv);
    append(homeWorldText, finalData.birth_year, newDiv);

    mainDiv.appendChild(newDiv);

    console.log(finalData);
  } catch (err) {
    console.log("something wrong", err);
  }
}

function append(elem, text, mainDiv) {
  elem.append(text);
  mainDiv.appendChild(elem);
  return mainDiv;
}
