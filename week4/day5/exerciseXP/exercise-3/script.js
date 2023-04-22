const navBar = document.getElementById("navBar");
 navBar.id = "socialNetworkNavigation";
const list = navBar.firstElementChild;
const newElem = document.createElement('li')
const newContent = document.createTextNode("Logout");
newElem.appendChild(newContent)
list.appendChild(newElem)

console.log(list.firstElementChild.textContent);
console.log(list.lastElementChild.textContent);