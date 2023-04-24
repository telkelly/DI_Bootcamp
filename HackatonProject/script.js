const squares = document.getElementsByClassName("square");
const different = document.getElementsByClassName("different").item(0);
const rulesBtn = document.getElementById("rules-btn");
const rulesDiv = document.getElementsByClassName("rules").item(0);
const mainDiv = document.getElementsByClassName("main-div").item(0);

let scope = 0;
let isCalledOnce = true;

rulesBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (isCalledOnce) {
    const newParag = document.createElement("p");
    const newText = document.createTextNode(
      "The game is about to find different square color within these squares. You'll gain one point when find it. Every level is getting harder so try to gain as much point as you can."
    );
      newParag.append(newText);
      newParag.classList.add('rules-info')
    rulesDiv.appendChild(newParag);
    isCalledOnce = false;
  } else {
    rulesDiv.removeChild(rulesDiv.lastElementChild);
    isCalledOnce = true;
  }
});

different.addEventListener("click", function (e) {
  e.preventDefault();
  secondLevel();
});

function secondLevel() {
  mainDiv.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("square");
    newDiv.style.background = "rgb(249, 123, 34)";
    mainDiv.appendChild(newDiv);
  }
  getRandom();
  const different = document.getElementsByClassName("different").item(0);
  different.style.background = "rgb(189, 121, 66)";
  different.addEventListener("click", function (e) {
    thirdLevel();
  });
}

function thirdLevel() {
  mainDiv.innerHTML = "";
  for (let i = 0; i < 9; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("square");
    newDiv.style.background = "darkpink";
    mainDiv.appendChild(newDiv);
  }
  getRandom();
  const different = document.getElementsByClassName("different").item(0);
  different.style.background = "purple";
  different.addEventListener("click", function (e) {
    forthLevel();
  });
}

function forthLevel() {
  mainDiv.innerHTML = "";
  for (let i = 0; i < 12; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("square");
    newDiv.style.background = "green";
    mainDiv.appendChild(newDiv);
  }
  getRandom();
  const different = document.getElementsByClassName("different").item(0);
  different.style.background = "darkgreen";
  different.addEventListener("click", function (e) {
    FifthLevel();
  });
}

function FifthLevel() {
  mainDiv.innerHTML = "";
  for (let i = 0; i < 12; i++) {
    let newDiv = document.createElement("div");
      newDiv.classList.add("square");
      newDiv.style.borderRadius = '50%';
      newDiv.style.border = '5px solid yellow'
          newDiv.style.background = "green";
    mainDiv.appendChild(newDiv);
  }
  getRandom();
  const different = document.getElementsByClassName("different").item(0);
  different.style.background = "darkgreen";
  different.addEventListener("click", function (e) {
    FifthLevel();
  });
}

console.log(scope);

function getRandom() {
  let newDivs = Array.from(mainDiv.children);
  let randomSquare = newDivs[Math.floor(Math.random() * newDivs.length)];
  randomSquare.classList.add("different");
}
