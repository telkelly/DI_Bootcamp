fetchCurrencies();

document.getElementById('convert').addEventListener("click", handleClick)

function fetchCurrencies() {
  const url =
    "https://v6.exchangerate-api.com/v6/08235d2c70859153c9f806ad/codes";

  fetch(url)
    .then((res) => res.json())
    .then((data) => populateDropdown(data.supported_codes))
    .catch((err) => console.log(err));
}

function populateDropdown(codes) {
  let entries = Object.entries(codes);
  console.log(entries);
  for (const entry of entries) {
    const [index, [code,name]] = entry;
    const option = document.createElement("option");
    const option2 = document.createElement('option');

    option.innerText = name;
    option2.innerText = name;

    option.value = index;
    option2.value = index;
    document.getElementById("from").appendChild(option);
    document.getElementById("to").appendChild(option2);
  }
}

function handleClick() {
  
}
