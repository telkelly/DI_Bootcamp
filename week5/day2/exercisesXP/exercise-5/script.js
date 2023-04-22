const div = document.getElementById('round');

div.addEventListener('mouseover', function (e) {
    e.target.style.marginLeft = '150px';
});

div.addEventListener('mouseout', function (e) {
    e.target.style.width = "250px";
    e.target.style.height = "250px";
});

div.addEventListener("click", function (e) {
  e.target.style.borderRadius = "0";
});

div.addEventListener("dblclick", function (e) {
  e.target.style.background = "purple";
});