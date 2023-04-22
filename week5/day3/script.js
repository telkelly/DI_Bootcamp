let string = "word in a given String";

function reverseAll(sentence) {
  let arr = sentence.split(" ");
  // console.log(arr);
  for (index in arr) {
    const word = arr[index];
    // console.log(word);
    // const reverse = reverseWord(word);
    let ret = "";
    for (let i = word.length - 1; i >= 0; i--) {
      ret += word[i];
    }
    // console.log(reverse);
    arr[index] = ret;
  }
  return arr.join(" ");
}

// const yep = reverseAll(string);
// console.log(yep);

// console.log('before');
// function setOut() {
//   setTimeout(function () {
//     console.log("hello");
//   }, 3 * 1000);
// }
// console.log('after');

const box = document.getElementById("box");

let id;

function start() {
  let i = 0;
  id = setInterval(function () {
      box.style.left = i + "px";
      box.style.top = i + 'px';
    i++;
    if (i == 351) {
      stop();
    }
  }, 2);
}

function stop() {
  clearInterval(id);
}
