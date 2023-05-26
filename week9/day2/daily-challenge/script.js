// exercise-1

function makeAllCaps(arr) {
  let myPromise = new Promise((res, rej) => {
    const allStr = arr.every((e) => typeof e === "string");
    if (allStr) {
      const upper = arr.map((e) => e.toUpperCase());
      res(upper);
    } else {
      rej("Array contains non-string elements.");
    }
  });
  return myPromise;
}

function sortWords(arr) {
  return new Promise((res, rej) => {
    if (arr.length > 4) {
      const sorting = arr.sort();
      res(sorting);
    } else {
      rej("Array less than 4 elements");
    }
  });
}

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//in this example, you should see in the console,
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
  .catch((error) => console.log(error));

// exercise-2

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

function toJs(str) {
  return new Promise((res, rej) => {
    const obj = JSON.parse(str);
    if (Object.keys(obj).length === 0) {
      rej("Error");
    } else {
      res(obj);
    }
  });
}

function toMorse(morseJs) {
  return new Promise((res, rej) => {
    const question = prompt("Write a word or sentence");
    const morseTrans = [];
    const morseObj = Object.keys(morseJs);

    for (let i = 0; i < question.length; i++) {
      const char = question[i].toUpperCase();
      if (morseObj.includes(char)) {
        morseTrans.push(morseJs[char]);
      } else {
        rej("Invalid character in the input.");
      }
    }
    res(morseTrans);
  });
}

function joinWords(morseTrans) {
  const joinedMorse = morseTrans.join(" ");
  return (document.body.innerHTML = joinWords);
}

toJs(morse)
  .then((morseObj) => toMorse(morseObj))
  .then((morseTrans) => joinWords(morseTrans))
  .catch((err) => console.log(err));
