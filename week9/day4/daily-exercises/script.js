// exercise-1
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, "foo");
// });

// Promise.all([promise1, promise2, promise3]).then(values => console.log(values))

// Promise.all waits till all promises will fullfilled or rejected and then i console array of promises if it isn't rejected it gives me the response
// i recieved this output cause promise one already resolved with value 3
// promise2 has value only 42 and promise 3 has setTimeOut with 3 sec delay and value foo
// so after 3 sec all promises are going to be resolved

// exercise-2

const form = document.getElementById("cityForm");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const city1Lat = document.getElementById("city1Lat").value;
  const city1Long = document.getElementById("city1Long").value;
  const city2Lat = document.getElementById("city2Lat").value;
  const city2Long = document.getElementById("city2Long").value;

  const city1Promise = fetchSunriseTime(city1Lat, city1Long);
  const city2Promise = fetchSunriseTime(city2Lat, city2Long);

  Promise.all([city1Promise, city2Promise])
    .then(function (results) {
      const city1SunriseTime = results[0];
      const city2SunriseTime = results[1];

      resultDiv.textContent = `City 1 Sunrise: ${city1SunriseTime}
            City 2 Sunrise: ${city2SunriseTime}`;
    })
    .catch(function (error) {
      resultDiv.textContent = "An error occurred while fetching sunrise times.";
      console.error(error);
    });
});

function fetchSunriseTime(latitude, longitude) {
  const url = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`;

  return fetch(url)
    .then(response => response.json())
    .then(data => data.results.sunrise);
}

