// exercise-1

const h1 = document.getElementsByTagName("h1")[0];
const article = document.body.firstElementChild;
const lastParagr = article.lastElementChild;
const h2 = article.children[1];
const h3 = article.children[2];
const allParagr = document.getElementsByTagName('p');
console.log(allParagr[1]);
console.log(h1);

h2.addEventListener('click', function (e) {
    e.target.style.background = 'red';
})

h3.addEventListener("click", function (e) {
  e.target.style.display = "none";
});

article.removeChild(lastParagr);

function getBold() {
    for (let i = 0; i < allParagr.length; i++){
        allParagr[i].style.fontWeight = '900'
    }
}

h1.addEventListener('mouseover', function (e) {
    let randomNum = Math.floor(Math.random() * 100);
    e.target.style.fontSize = `${randomNum}px`;
})

allParagr[1].addEventListener('mouseover', function (e) {
    e.target.classList.add('fade-in');
})



