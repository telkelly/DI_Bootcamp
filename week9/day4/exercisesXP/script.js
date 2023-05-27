// exercise-1

async function fetchData() {
  const fetching = await fetch("https://www.swapi.tech/api/starships/9/");
  const data = await fetching.json();
  return console.log(data.result);
}

fetchData();


// exercise-2

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  let result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall(); // it will console "calling" and after 2 sec it consoles resolved