const div = document.getElementById('container');
const btn = document.getElementById('clear');

let id;
let counter = 0;

function addParag() {
    id = setInterval(function(){
        let newP = document.createElement('p');
        let newText = document.textContent = 'Hello World';
        newP.append(newText);
        div.appendChild(newP);
        counter++;
        if (counter == 5) {
            stop()
        }
    }, 1000)
}

function stop() {
    clearInterval(id)
}

btn.addEventListener('click', stop)

addParag()