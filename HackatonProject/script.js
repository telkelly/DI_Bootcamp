const squares = document.getElementsByClassName("square");
const different = document.getElementsByClassName("different").item(0);
const rulesBtn = document.getElementById("rules-btn");
const rulesDiv = document.getElementsByClassName("rules").item(0);
const mainDiv = document.getElementsByClassName("main-div").item(0);
const counter = document.getElementById("counter");

console.log(counter);

let scope = 0;
let isCalledOnce = true;
let isSquare = false;

function scopeCounter() {
  scope++;
  counter.textContent = scope;
}

rulesBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (isCalledOnce) {
    const newParag = document.createElement("p");
    const newText = document.createTextNode(
      "The game is about to find different square color within these squares. You'll gain one point when find it. Every level is getting harder so try to gain as much point as you can."
    );
    newParag.append(newText);
    newParag.classList.add("rules-info");
    rulesDiv.appendChild(newParag);
    isCalledOnce = false;
  } else {
    rulesDiv.removeChild(rulesDiv.lastElementChild);
    isCalledOnce = true;
  }
});

different.addEventListener("click", function (e) {
  e.preventDefault();
  scopeCounter();
  secondLevel();
});

function gameOver() {
  for (let square of squares) {
    if (square) {
      square.addEventListener("click", function (e) {
        mainDiv.innerHTML = "";
        let newDiv = document.createElement("div");
        let newText = document.createTextNode(
          "You did well, but it is the end. Try again, champion!"
        );
        let newBtn = document.createElement("button");
        newBtn.innerHTML = "Try again";
        let img = document.createElement("img");
        img.src = "./sadcat.png";
        newDiv.appendChild(newText);
        newDiv.appendChild(img);
        newDiv.appendChild(newBtn);
        newDiv.classList.add("game-over");
        newBtn.classList.add("try-again");
        img.style.width = "100px";
        mainDiv.appendChild(newDiv);
        newBtn.addEventListener("click", startAgain);
      });
    } else {
      return false;
    }
  }
}

function startAgain() {
  scope = 0;
  counter.textContent = scope;
  secondLevel();
}

function secondLevel() {
  mainDiv.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("square");
    newDiv.style.background = "#F0A00F";
    mainDiv.appendChild(newDiv);
  }
  getRandom();
  const different = document.getElementsByClassName("different").item(0);
  different.classList.remove("square");
  different.style.background = "#F2B039";
  gameOver();
  different.addEventListener("click", function (e) {
    thirdLevel();
  });
}

function thirdLevel() {
  scopeCounter();
  mainDiv.innerHTML = "";
  for (let i = 0; i < 9; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("square");
    newDiv.style.background = "#368BC9";
    mainDiv.appendChild(newDiv);
  }
  getRandom();
  const different = document.getElementsByClassName("different").item(0);
  different.classList.remove("square");
  different.style.background = "#5EA2D4";
  gameOver();
  different.addEventListener("click", function (e) {
    forthLevel();
  });
}

function forthLevel() {
  scopeCounter();
  mainDiv.innerHTML = "";
  for (let i = 0; i < 12; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("square");
    newDiv.style.background = "#9D626F";
    mainDiv.appendChild(newDiv);
  }
  getRandom();
  const different = document.getElementsByClassName("different").item(0);
  different.classList.remove("square");
  different.style.background = "#B1818C";
  gameOver();
  different.addEventListener("click", function (e) {
    fifthLevel();
  });
}

function fifthLevel() {
  scopeCounter();
  mainDiv.innerHTML = "";
  for (let i = 0; i < 30; i++) {
    createRoundSquares("40px", "#FCC438", "5px solid grey");
  }
  getRandom();
  const different = document.getElementsByClassName("different").item(0);
  different.classList.remove("square");
  different.style.background = "#FDD36A";
  gameOver();
  different.addEventListener("click", function (e) {
    sixthLevel();
  });
}

function sixthLevel() {
  scopeCounter();
  mainDiv.innerHTML = "";
  for (let i = 0; i < 35; i++) {
    createRoundSquares("35px", "#34C4CB", "5px solid #2AD5B0");
  }
  getRandom();
  const different = document.getElementsByClassName("different").item(0);
  different.classList.remove("square");
  different.style.background = "#5DCFD5";
  gameOver();
  different.addEventListener("click", function (e) {
    seventhLevel();
  });
}

function seventhLevel() {
  scopeCounter();
  mainDiv.innerHTML = "";
  for (let i = 0; i < 35; i++) {
    createRoundSquares("35px", "#2AD5B0", "5px solid #8E8BA7");
  }
  getRandom();
  const different = document.getElementsByClassName("different").item(0);
  different.classList.remove("square");
  different.style.background = "#55DDC0";
  gameOver();
  different.addEventListener("click", function (e) {
    eighthLevel();
  });
}

function eighthLevel() {
  scopeCounter();
  mainDiv.innerHTML = "";
  for (let i = 0; i < 35; i++) {
    createRoundSquares("35px", "#726E91", "5px solid #F3D83F");
  }
  getRandom();
  const different = document.getElementsByClassName("different").item(0);
  different.classList.remove("square");
  different.style.background = "#8E8BA7";
  gameOver();
  different.addEventListener("click", function (e) {
    ninthLevel();
  });
}

function ninthLevel() {
  scopeCounter();
  mainDiv.innerHTML = "";
  for (let i = 0; i < 36; i++) {
    createRoundSquares("35px", "#F0CF0F", "none");
  }
  getRandom();
  const different = document.getElementsByClassName("different").item(0);
  different.classList.remove("square");
  different.style.background = "#F3D83F";
  gameOver();
  different.addEventListener("click", function (e) {
    winner();
  });
}

function winner() {
  mainDiv.innerHTML = "";
  let newDiv = document.createElement("div");
  let newText = document.createTextNode(
    "Your vision is amazing! You win!"
  );
  let newBtn = document.createElement("button");
  newBtn.innerHTML = "Start again";
  let img = document.createElement("img");
  img.src = "./happycat.png";
  newDiv.appendChild(newText);
  newDiv.appendChild(img);
  newDiv.appendChild(newBtn);
  newDiv.classList.add("game-over");
  newBtn.classList.add("try-again");
  img.style.width = "100px";
  mainDiv.appendChild(newDiv);
  newBtn.addEventListener("click", startAgain);
}

function createRoundSquares(widthAndHeight, squareColor, border) {
  let newDiv = document.createElement("div");
  newDiv.classList.add("square");
  newDiv.style.borderRadius = "50%";
  newDiv.style.border = border;
  newDiv.style.width = widthAndHeight;
  newDiv.style.height = widthAndHeight;
  newDiv.style.background = squareColor;
  mainDiv.appendChild(newDiv);
}

function getRandom() {
  let newDivs = Array.from(mainDiv.children);
  let randomSquare = newDivs[Math.floor(Math.random() * newDivs.length)];
  randomSquare.classList.add("different");
}
