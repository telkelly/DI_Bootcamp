function getGif(e){
    e.preventDefault();
    const frm = document.forms.gifForm;
    const searchInput = frm.elements.search.value; 
    const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
    let url = "http://api.giphy.com/v1/gifs/search?q="+ encodeURIComponent(searchInput) + '&api_key=' + apiKey;

    let xhr = new XMLHttpRequest();

    xhr.open(
      "GET",
      url
    );

    xhr.responseType = 'json';

    xhr.onload = () => {
        console.log(xhr.response.data);

    }

    xhr.send()
}