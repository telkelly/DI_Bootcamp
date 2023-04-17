const div = document.getElementById('container')
console.log(div)

const list = document.getElementsByClassName('list')

const firstList = list[0]

const oldElem = list[0].children[1];

const newElem = document.createElement('li');
const newText = document.createTextNode('Richard')

newElem.appendChild(newText)

firstList.replaceChild(newElem, oldElem);

for (let index = 0; index < list.length; index++) {
    list[index].classList.add("student_list");
}

list[0].classList.add('university');
list[0].classList.add("attendance");

