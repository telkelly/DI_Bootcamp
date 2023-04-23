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
  let newDivs = [];
  for (let i = 0; i < 4; i++) {
      let newDiv = document.createElement("div");
      newDiv.classList.add('square');
      mainDiv.appendChild(newDiv)
  }
  console.log(newDivs);
}
