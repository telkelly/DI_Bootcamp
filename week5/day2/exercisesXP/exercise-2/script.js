const form = document.body.firstElementChild;
const fname = document.getElementById('fname');
const lname = document.getElementById("lname");
const ul = document.getElementsByClassName('usersAnswer')
const atttributeName = document.querySelector('[name=fname]').value;
const atttributeLname = document.querySelector("[name=lname]").value;
const submitBtn = document.getElementById('submit');

const valuefName = fname.value;
const valuelName = lname.value;

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
        let newLi = document.createElement('li');
        let newText = document.createTextNode(valuefName)
        newLi.appendChild(newText)
        ul[0].appendChild(newLi);
    
})
