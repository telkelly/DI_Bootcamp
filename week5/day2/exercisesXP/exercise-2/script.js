const form = document.body.firstElementChild;
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const ul = document.getElementsByClassName("usersAnswer");
const atttributeName = document.querySelector("[name=fname]").value;
const atttributeLname = document.querySelector("[name=lname]").value;
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const valuelName = lname.value;
  const valuefName = fname.value;
  if (valuefName == "" || valuelName == "") {
    alert("Please write your name and last name");
  }
  let newLiName = document.createElement("li");
  let newLiLastname = document.createElement("li");
  let newTextName = document.createTextNode(valuefName);
  let newTextLastname = document.createTextNode(valuelName);
  newLiName.appendChild(newTextName);
  newLiLastname.appendChild(newTextLastname);
  ul[0].appendChild(newLiName);
  ul[0].appendChild(newLiLastname);
});
