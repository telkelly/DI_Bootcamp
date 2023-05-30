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
    console.log(finalData);
    hideLoader();
    const newDiv = document.createElement("div");
    newDiv.classList.add("main");
    const nameText = document.createElement("p");
    nameText.classList.add("name");
    const heightText = document.createElement("p");
    heightText.classList.add("description");
    const genderText = document.createElement("p");
    genderText.classList.add("description");
    const birthYearText = document.createElement("p");
    birthYearText.classList.add("description");
    const homeWorldText = document.createElement("p");
    homeWorldText.classList.add("description");

    append(nameText, finalData.name, newDiv);
    append(heightText, `Height: ${finalData.height}`, newDiv);
    append(genderText, `Gender: ${finalData.gender}`, newDiv);
    append(birthYearText, `Birth Year: ${finalData.birth_year}`, newDiv);
    append(
      homeWorldText,
      `Home World: ${finalPlanetData.properties.name}`,
      newDiv
    );

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
