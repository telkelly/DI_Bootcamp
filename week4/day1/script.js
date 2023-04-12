function helloWorld(word) {
  return console.log(word);
}

helloWorld("Hello World");

function findSquare(num) {
  return num * num;
}

console.log(findSquare(2));
console.log(findSquare(9));
console.log(findSquare(15));

function celcium(temp) {
  return temp * 1.8 + 32;
}

console.log(celcium(0));

function vowels(word) {
  word = word.toLowerCase();
  let store = 0;
  for (let i = 0; i < word.length; i++) {
    if (
      word[i] == "a" ||
      word[i] == "e" ||
      word[i] == "i" ||
      word[i] == "o" ||
      word[i] == "u" ||
      word[i] == "y"
    )
      store++;
  }
  return store;
}

console.log(vowels("twentYfive"));

function myAge(age) {
    let myMomAge = age * 2;
    let myDadAge = myMomAge * 1.2;

    // let arr = [myMomAge, myDadAge];
    // return arr;

    let obj = {
        mom: myMomAge,
        dad: myDadAge
    }
    return obj;
}

let func = myAge(30)

// console.log(`My mom is ${func[0]} old and my dad is ${func[1]} old`);
console.log(`My mom is ${func.mom} old and my dad is ${func.dad} old`);

function checkPalindrome(word) {
    for (let i = 0; i < word.length; i++) {
        console.log(word[i])
    }

    return word
}

console.log(checkPalindrome('banana'))