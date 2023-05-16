function getData() {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  xhr.responseType = "json";

  xhr.send();

    xhr.onload = () => {
        let arr = xhr.response;
        const content = arr.map(i => {
            return `<div style='display:inline-block;'>
            <img src='https://robohash.org/${i.id}?size=150x150'/>
            <h2>${i.name}</h2>
            <p>${i.email}</p>
            <p>${i.username}</p>
            </div>`;
        })
        document.getElementById('robot').innerHTML = content.join()
  };
}