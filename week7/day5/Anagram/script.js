function anagram(firstWord, secondWord) {
  let first = firstWord.split(' ').join('').toLowerCase();
  let second = secondWord.split(' ').join('').toLowerCase();

  if (first.length !== second.length) {
    console.log('invalid');
  } 

  let firstArr = [...first].sort();
  let secondArr = [...second].sort();

  for (let i = 0; i < firstArr.length; i++){
    if (firstArr[i] != secondArr[i]) {
      return console.log('nope try other words, they are not compare')
    } else {
      return console.log('yes it is anagram');
    }
  }


  return;
}

anagram("Astronomer", "Moon starer");
anagram("School master", "The classroom");
anagram("The Morse Code", "Here come dots");
anagram("The Morse", "Here come dots");