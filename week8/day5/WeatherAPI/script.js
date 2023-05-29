const APIkey = "6bc236fa8bd5e7e03f83fd8cea3eac74";

const weathers = document.getElementsByClassName("weathers").item(0);

let lat = 0;
let lon = 0;
let flag = false;

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
    try {
      lat = json[0].lat;
      lon = json[0].lon;
      getData(lat, lon);
    } catch {
      weathers.innerHTML = "";
      let newDiv = document.createElement("div");
      newDiv.classList.add("error");

      let newText = document.createElement("h3");
      let newText1 = document.createElement("h3");

      newText.innerText = "Oops";
      newDiv.appendChild(newText);

      newText1.innerText = "There is no city, try again!";
      newDiv.appendChild(newText1);

      let newSpan = document.createElement("span");
      newSpan.classList.add("close-err");
      newDiv.appendChild(newSpan);

      weathers.appendChild(newDiv);
    }
  };
}

function getData(lat, lon) {
  try {
    let url =
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=` +
      APIkey;

    let xhr = new XMLHttpRequest();

    xhr.open("GET", url);
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = function () {
      const switcher = document.getElementsByClassName("switch").item(0);

      const dataMain = xhr.response.main;
      let formulaToCelsium = `${Math.floor(dataMain.temp - 273.15)}°C`;
      let formulaToFarh = `${Math.floor(
        ((dataMain.temp - 273.15) * 9) / 5 + 32
      )}°F`;

      let newDiv = document.createElement("div");
      newDiv.classList.add("weather");
      let name = document.createElement("h4");
      name.classList.add("country-name");
      let newH3 = document.createElement("h3");
      newH3.classList.add("temp");
      let newImg = document.createElement("img");
      let newText = document.createElement("p");
      newText.classList.add("weather-description");
      let newTexSunrise = document.createElement("p");
      newTexSunrise.classList.add("sunrise");
      let newTextSunset = document.createElement("p");
      newTextSunset.classList.add("sunset");
      let newTextWind = document.createElement("p");
      newTextWind.classList.add("wind");
      let newSpan = document.createElement("span");
      newSpan.classList.add("close");

      name.append(`${xhr.response.name}, ${xhr.response.sys.country}`);
      newImg.setAttribute("src", getWeatherIcon(xhr.response.weather[0].icon));
      newH3.append(formulaToCelsium);
      newText.append(xhr.response.weather[0].description);
      newTexSunrise.append(
        `Sunrise: ${converterUnix(xhr.response.sys.sunrise)}`
      );
      newTextSunset.append(`Sunset: ${converterUnix(xhr.response.sys.sunset)}`);
      newTextWind.append(`Speed wind: ${xhr.response.wind.speed}`);

      newDiv.appendChild(name);
      newDiv.appendChild(newImg);
      newDiv.appendChild(newH3);
      newDiv.appendChild(newText);
      newDiv.appendChild(newSpan);
      newDiv.appendChild(newTexSunrise);
      newDiv.appendChild(newTextSunset);
      newDiv.appendChild(newTextWind);

      weathers.appendChild(newDiv);

      newSpan.onclick = function () {
        weathers.removeChild(newDiv);
      };

      switcher.onclick = function (e) {
        e.stopPropagation();
        if (flag === false) {
          newH3.innerHTML = "";
          newH3.append(formulaToFarh);
          flag = true;
          console.log(5);
        } else {
          newH3.innerHTML = "";
          newH3.append(formulaToCelsium);
          console.log(6);
          flag = false;
        }
      };
    };
  } catch (error) {
    if (error) {
      console.log(10);
    }
  }
}

function getWeatherIcon(iconCode) {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

function converterUnix(data) {
  let unix_timestamp = data;
  var date = new Date(unix_timestamp * 1000);
  var hours = date.getHours();
  var minutes = date.getMinutes();

  var formattedTime = hours + ":" + minutes;

  return formattedTime;
}
