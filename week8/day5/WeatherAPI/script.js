const APIkey = "6bc236fa8bd5e7e03f83fd8cea3eac74";

let lat = 0;
let lon = 0;

function getCoordinates(country) {
  let url =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    country +
    "&limit=5&appid=" +
    APIkey;
  let xhr = new XMLHttpRequest();

  // xhr.responseType = "json";

  xhr.open("GET", url);
  xhr.send();

  xhr.onload = function () {
    let json = JSON.parse(xhr.responseText);
    lat = json[0].lat;
    lon = json[0].lon;
    console.log(lat, lon);
    return lat, lon;
  };
}

function getData(e) {
  e.preventDefault();
  console.log(lat,lon);

  let url =
    "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=" +
    APIkey;
  let xhr = new XMLHttpRequest();

  xhr.open("GET", url);
}

getCoordinates("Israel");
console.log(lat, lon);
