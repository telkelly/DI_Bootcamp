// exercise-1
let xml = new XMLHttpRequest();

xml.open(
  "GET",
  "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
);

xml.responseType = "json";

xml.onload = () => {
  console.log(xml.response);
};

xml.send();

// exercise-2

let xmlSun = new XMLHttpRequest();

xmlSun.open(
  "GET",
  "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
);

xmlSun.responseType = "json";

xmlSun.onload = () => {
  let data = xmlSun.response.data;
  let arr = Object.values(data).slice(2,10)
  console.log(arr);
};

xmlSun.send();
