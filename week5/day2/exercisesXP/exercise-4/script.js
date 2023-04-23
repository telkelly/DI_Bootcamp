const submit = document.getElementById('submit');

submit.addEventListener('click', function (e) {
    e.preventDefault();
    let volume;
    const radius = document.getElementById('radius').value;
    if (radius == '') {
        alert('Please put a number')
    }
    volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4);
    document.getElementById('volume').value = volume;
})