// exercise-1
let xml = new XMLHttpRequest();

xml.open(
  "GET",
  "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
);

xml.responseType = 'json';

xml.onload = () => {
    console.log(xml.response);
}

xml.send()

// exercise-2