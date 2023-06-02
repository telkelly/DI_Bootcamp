fetchCurrencies();

document.getElementById("input").addEventListener("keyup", handleClick);
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const switchBtn = document.getElementById('switch');

fromSelect.addEventListener('change', handleClick)
toSelect.addEventListener("change", handleClick);
switchBtn.addEventListener('click', switchCurrencies)

function switchCurrencies() {
  [fromSelect.value, toSelect.value] = [toSelect.value, fromSelect.value];
  handleClick(); 
}

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
    const [index, [code, name]] = entry;
    const option = document.createElement("option");
    const option2 = document.createElement("option");

    option.innerText = code + " ," + name;
    option2.innerText = code + " ," + name;

    option.value = code;
    option2.value = code;
    fromSelect.appendChild(option);
    toSelect.appendChild(option2);
  }
}

async function handleClick() {
  const input = document.getElementById("input");

  const curr1 = fromSelect.value;
  const curr2 = toSelect.value;

  const summary = document.getElementById('summary')

  const url = `https://v6.exchangerate-api.com/v6/08235d2c70859153c9f806ad/pair/${curr1}/${curr2}`;
  try {
    const res = await fetch(url);
    const resJson = await res.json();
    const rate = resJson.conversion_rate;
    const amount = Number(input.value);
    const total = rate * amount;
    summary.innerText = `${amount} ${curr1} = ${total}`
    console.log(total);
  } catch (err) {
    console.log(err);
  }
}
