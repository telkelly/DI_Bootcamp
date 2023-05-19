function getData(e) {
    e.preventDefault();
    console.log(5);

    let url = 'https://api.openweathermap.org/data/2.5/weather?lat=$ ' + '{lat}&lon={lon}&appid={API key}';
    let xhr = new XMLHttpRequest();


    xhr.open("GET", url)
}