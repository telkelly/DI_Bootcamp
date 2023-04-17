const list = document.getElementsByClassName('listBooks');

let allBooks = [
  {
    title: "In search of lost time",
    author: "Marcel Proust",
    image:
      "https://kbimages1-a.akamaihd.net/0e77a0f9-14f7-4a97-9784-053bc1691e87/1200/1200/False/in-search-of-lost-time-volumes-1-to-7-8.jpg",
    alreadyRead: true,
  },
  {
    title: "Ulysses",
    author: "James Joyce",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c0/UlyssesCover.jpg?20120924020214",
    alreadyRead: false,
  },
];

const table = document.createElement("table")


for (let i = 0; i < allBooks.length; i++){
    let row = table.insertRow(i);
    let img = `<img style="width:100px" src = ${allBooks[i].image}/>`;
    row.innerHTML = allBooks[i].title + ' written by ' + allBooks[i].author + " " + img;
    if (allBooks[i].alreadyRead == true) {
        row.style.color = 'red'
    }
}

list[0].appendChild(table)


