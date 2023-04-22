// const myOnClick = () => {
//     return alert('hello')
// }


// const getValue = (e) => {
//     console.log(e.target.value);
// }

// const getDivText = (e) => {
//     console.log(e.target.innerText);
// }

const root = document.getElementById('root')

let arr = [
  { id: 1, user: "John", email: "john@gmail.com" },
  { id: 2, user: "Sara", email: "sara@gmail.com" },
  { id: 3, user: "Yasaar", email: "yasaar@gmail.com" },
  { id: 10, user: "Yeshna", email: "yeshna@gmail.com" },
  { id: 5, user: "Varshana", email: "varshana@gmail.com" },
];

function getRobots() {
    root.innerHTML = '';
    for (let i = 0; i < arr.length; i++){
        let newDiv = document.createElement("div");
        newDiv.classList.add('inner-div')

        let img = document.createElement('img');
        img.setAttribute('src', `http://robohash.org/${arr[i].id}`);
        img.style.width = '120px';
        newDiv.appendChild(img);

        let name = document.createElement('h2');
        name.innerHTML = arr[i].user;
        newDiv.appendChild(name);

        let email = document.createElement("h3");
        email.innerHTML = arr[i].email;
        newDiv.appendChild(email);

        root.appendChild(newDiv)
    }
}


// function changeColor(e) {
//   e.target.style.background = 'green'
// }

// function changeColorBack(e) {
//   e.target.style.background = "orange";
// }

const div1 = document.getElementById('div1'); // it was divColor
// console.log(divColor);

// divColor.addEventListener('mouseover', function (e) {
//     e.target.style.background = "green";
// })

// divColor.addEventListener("mouseleave", function (e) {
//   e.target.style.background = "orange";
// });

const div2 = document.getElementById('div2')

div1.addEventListener('click', function (e) {
    alert('soup')
    e.stopPropagation()
})

div2.addEventListener("click", function (e) {
  alert("pasta");
});