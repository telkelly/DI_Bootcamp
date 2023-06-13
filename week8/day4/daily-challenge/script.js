function getGif(e){
    e.preventDefault();
    const frm = document.forms.gifForm;
    const searchInput = frm.elements.search.value; 
    const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
    let url = "https://api.giphy.com/v1/gifs/search?q="+ encodeURIComponent(searchInput) + '&api_key=' + apiKey;

    let xhr = new XMLHttpRequest();

    xhr.open(
      "GET",
      url
    );

    xhr.responseType = 'json';

    xhr.onload = () => {
        let response = xhr.response.data;
        let randomGif = getRandom(response);

        let newImg = document.createElement('img');
        newImg.setAttribute("src", `${randomGif.url}`);
        const div = document.getElementById('gif');
        div.appendChild(newImg);
    }

    xhr.send()
}

function getRandom(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex]
}