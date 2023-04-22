let orangeSquare = document.getElementById("drop-container");
let pinkSquareContainer = document.getElementsByClassName(
  "draggable-container"
)[0];

console.log(pinkSquareContainer);

// draggable element
let pinkSquare = document.getElementById("draggable-element");

pinkSquare.addEventListener("dragstart", function (e) {
  e.dataTransfer.setData("pink-square", e.target.id);
  e.dataTransfer.effectAllowed = "move";
  e.target.style.cursor = "move";
});

pinkSquare.addEventListener("drag", function (e) {
  e.preventDefault();
  // console.log(e.target);
  e.target.classList.add("hide");
});

orangeSquare.addEventListener("dragover", function (e) {
  e.preventDefault();
});

orangeSquare.addEventListener("drop", function (e) {
  e.preventDefault();
  let id = e.dataTransfer.getData("pink-square");
  let pink = document.getElementById(id);
  e.target.appendChild(pink);
});

pinkSquareContainer.addEventListener("dragover", function (e) {
  e.preventDefault();
});

pinkSquareContainer.addEventListener("drop", function (e) {
  e.preventDefault();
  let id = e.dataTransfer.getData("pink-square");
  let pink = document.getElementById(id);
  e.target.appendChild(pink);
});
