const box = document.getElementById('animate')
let id;

function myMove() {
  let i = 0;
  id = setInterval(function () {
    box.style.left = i + "px";
    i++;
    if (i == 351) {
      stop();
    }
  }, 2);
}

function stop() {
  clearInterval(id);
}
