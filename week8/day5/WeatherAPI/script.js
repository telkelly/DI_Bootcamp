const APIkey = "6bc236fa8bd5e7e03f83fd8cea3eac74";

let lat = 0;
let lon = 0;

function getCoordinates(e) {
  e.preventDefault();
  let formCountry = document.forms.formCountry;
  let country = formCountry.elements.inputCountry.value;

  let url =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    country +
    "&limit=5&appid=" +
    APIkey;
  let xhr = new XMLHttpRequest();

  xhr.open("GET", url);
  xhr.send();

  xhr.onload = function () {
    let json = JSON.parse(xhr.responseText);
    lat = json[0].lat;
    lon = json[0].lon;
    getData(lat, lon);
  };
}

function getData(lat, lon) {
  let url =
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=` +
    APIkey;

  let xhr = new XMLHttpRequest();

  xhr.open("GET", url);
  xhr.send();
  xhr.responseType = "json";
  xhr.onload = function () {
    const dataMain = xhr.response.main;
    const weathers = document.getElementsByClassName("weathers").item(0);
    let formulaToCelsium = `${Math.floor(dataMain.temp - 273.15)}°C`;

    let newDiv = document.createElement("div");
    newDiv.classList.add("weather");
    let name = document.createElement("h4");
    name.classList.add("country-name");
    let newH3 = document.createElement("h3");
    newH3.classList.add("temp");
    let newImg = document.createElement("img");
    let newText = document.createElement("p");
    newText.classList.add("weather-description");
    let newSpan = document.createElement("span");
    newSpan.classList.add("close");

    name.append(`${xhr.response.name}, ${xhr.response.sys.country}`);
    newImg.setAttribute("src", getWeatherIcon(xhr.response.weather[0].icon));
    newH3.append(formulaToCelsium);
    newText.append(xhr.response.weather[0].description);
    console.log(xhr.response.name);

    newDiv.appendChild(name);
    newDiv.appendChild(newImg);
    newDiv.appendChild(newH3);
    newDiv.appendChild(newText);
    newDiv.appendChild(newSpan);

    weathers.appendChild(newDiv);

    newSpan.onclick = function () {
      weathers.removeChild(newDiv);
    }
  };
}


function getWeatherIcon(iconCode) {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}
