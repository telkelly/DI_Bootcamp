// const div = document.getElementById('outer')
// console.log(div)
// const p = document.getElementsByClassName('text')
// const divs = document.getElementsByTagName('div')
// console.log(divs);

// exercise-1
const inner = document.getElementById('inner')
const firstElemChild = inner.firstElementChild;
const firstChild = inner.firstChild;
console.log(firstChild)
const lastElemChild = inner.lastElementChild;
const lastChild = inner.lastChild;
console.log(lastChild);
const getBody = document.body;
const nextElemSibling = getBody.nextElementSibling;
const nextSibling = getBody.nextSibling;
const previousElemSibling = getBody.previousElementSibling;
const previousSibling = inner.previousSibling;
console.log(previousSibling);
const parentNode = inner.parentNode;
console.log(parentNode);
const childNotes = inner.childNodes;
console.log(childNotes);

// exercise-2



firstElemChild.innerText = "I've changed the H1 fron JS"

console.log(getBody.nodeValue);

console.log(getBody.innerText)

console.log(getBody.innerHTML);

lastElemChild.innerHTML = "<h5>Hi I'm newborn here</h5>"

lastChild.textContent = "hello";

// exercise - 3

const outer = document.getElementById('outer')

outer.removeChild(inner)