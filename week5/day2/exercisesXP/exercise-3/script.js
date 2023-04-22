const paragrah = document.body.firstElementChild;
const paragraphs = document.getElementsByTagName("strong");
let allBoldItems;

function getBold_items() {
  allBoldItems = Array.from(paragraphs);
}

function highlight() {
  getBold_items();
  for (let i = 0; i < allBoldItems.length; i++) {
    allBoldItems[i].style.color = "lightblue";
  }
}

function return_normal() {
  getBold_items();
  for (let i = 0; i < allBoldItems.length; i++) {
    allBoldItems[i].style.color = "black";
  }
}

paragrah.addEventListener('mouseover', highlight)
paragrah.addEventListener('mouseout', return_normal)


