// let xhr = new XMLHttpRequest();
// // open(method, url, [async, user, password])

// xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

// xhr.send()

// xhr.onload = function () {
//     console.log(JSON.parse(xhr.response));
// }

// xhr.onerror = function () {
//     console.log('something wrong');
// }

// xhr.onprogress = function (event) {
//     console.log(event.loaded, event.total, event.lengthComputable);
// }

// function getRandomJoke(e) {
//   e.preventDefault();

//   const xhr = new XMLHttpRequest();
//   xhr.withCredentials = true;

//   xhr.open(
//     "GET",
//     `https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random?category=${e.target.cat.value}`
//   );

//   xhr.setRequestHeader("accept", "application/json");
//   xhr.setRequestHeader(
//     "X-RapidAPI-Key",
//     "3bc4205b95msh053da429b4479cdp13dcd3jsn57e065230884"
//   );
//   xhr.setRequestHeader(
//     "X-RapidAPI-Host",
//     "matchilling-chuck-norris-jokes-v1.p.rapidapi.com"
//   );

//     //timeout
//     xhr.timeout = 10000;
    
//     //responseType = 1.text 2.json 3.document 4.arraybuffer 5.blob

//     //abort -- terminate the request
//    // xhr.abort()

//     xhr.responseType ='json'

//   xhr.send();

//     xhr.onload = () => {
//         let pp = document.getElementById('root')
//         let joke = xhr.response.value;
//         pp.append(joke)
//     // document.getElementById("root").innerHTML = joke;
//         console.log(joke);
//   };
// }

let xhr = new XMLHttpRequest();
// open(method, url, [async, user, password])

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.setRequestHeader("Content-type", "application/json");

let article = {
  title: "new article",
  body: "bla bla bla",
};

xhr.send(JSON.stringify(article)) // sending data to the server


// xhr.responseType = 'document';

xhr.onload = function () {
    console.log(xhr.response);
}

xhr.onerror = function () {
    console.log('something wrong');
}

xhr.onprogress = function (event) {
    console.log(event.loaded, event.total, event.lengthComputable);
}