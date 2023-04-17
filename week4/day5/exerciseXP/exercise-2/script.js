const div = document.getElementsByTagName('div')
const background = div[0].style.backgroundColor = 'lightblue';
div[0].style.padding = "15px";


const list = div[0].nextElementSibling;

list.children[0].style.visibility = 'hidden';

list.children[1].style.border = "5px solid black";


document.body.style.fontFamily = "Impact,Charcoal,sans-serif";

// if (background == 'lightblue') {
//     alert(`Hello ${list.children[0]} and ${list.children[1]}`);
// }