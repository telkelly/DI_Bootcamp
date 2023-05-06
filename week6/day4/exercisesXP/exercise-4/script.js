const navbe = document.getElementById("navbar");

(function (name) {
  let newLi = document.createElement("li");
  let newA = document.createElement("a");
  let newText = (document.textContent = name);
  newLi.appendChild(newA);
  newA.append(newText);
  newA.classList.add("nav-link");
  newLi.classList.add("nav-item");
  navbar.appendChild(newLi);
})("Mark");
