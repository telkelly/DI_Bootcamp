const squares = document.getElementsByClassName("square");
const different = document.getElementsByClassName("different").item(0);
const rulesBtn = document.getElementById("rules-btn");
const rulesDiv = document.getElementsByClassName("rules").item(0);
const mainDiv = document.getElementsByClassName("main-div").item(0);

let isCalledOnce = true;

rulesBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (isCalledOnce) {
    const newParag = document.createElement("p");
    const newText = document.createTextNode(
      "The game is about to find different square color within these squares. You'll gain one point when find it. Every level is getting harder so try to gain as much point as you can."
    );
    newParag.append(newText);
    rulesDiv.appendChild(newParag);
    isCalledOnce = false;
  } else {
    rulesDiv.removeChild(rulesDiv.lastElementChild);
    isCalledOnce = true;
  }
});

different.addEventListener("click", function (e) {
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
      newDiv.style.background = 'red';
    mainDiv.appendChild(newDiv);
  }
  getRandom();
    const different = document.getElementsByClassName("different").item(0);
    different.style.background = 'yellow';
  different.addEventListener("click", function (e) {
    thirdLevel();
  });
}

function getRandom() {
  let newDivs = Array.from(mainDiv.children);
  let randomSquare = newDivs[Math.floor(Math.random() * newDivs.length)];
  randomSquare.classList.add("different");
}
