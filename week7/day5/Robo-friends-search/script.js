const robotsDiv = document.getElementById('robots');
const filterInput = document.getElementById('filter');

const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "https://robohash.org/1?200x200",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    image: "https://robohash.org/2?200x200",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    image: "https://robohash.org/3?200x200",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    image: "https://robohash.org/4?200x200",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    image: "https://robohash.org/5?200x200",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    image: "https://robohash.org/6?200x200",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    image: "https://robohash.org/7?200x200",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    image: "https://robohash.org/8?200x200",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    image: "https://robohash.org/9?200x200",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    image: "https://robohash.org/10?200x200",
  },
];



function getRobots() {
    Object.values(robots).forEach(item => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('robot')
        let newImg = document.createElement('img');
        newImg.setAttribute("src", `${item.image}`);
        newDiv.appendChild(newImg);
        
        let newH3 = document.createElement('h3');
        newH3.textContent = `${item.name}`;
        newH3.classList.add('name');
        newDiv.appendChild(newH3);

        let newH5 = document.createElement("h5");
        newH5.textContent = `${item.email}`;
        newH5.classList.add("email");
        newDiv.appendChild(newH5);

        robotsDiv.appendChild(newDiv);
    })
}

getRobots();

filterInput.addEventListener('input', function (e) {
    let finded = [];
    Object.values(robots).filter(item => {
        let name = item.name.toLowerCase();
        let pick = name.substring(0, 2);
        if (name.startsWith(e.target.value) || e.target.value==pick && name.includes(e.target.value)) {
            finded.push(item)
        } else {
            return false;
        }
    })
    robotsDiv.innerHTML = "";
    return createFindedRobot(finded);
})

function createFindedRobot(arr) {
    if (arr.length === 0) {
        let newDiv = document.createElement('div');
        newDiv.classList.add = 'no-robots';
        let newText = document.textContent= 'No robots with this name, bro';
        newDiv.append(newText)
        robotsDiv.appendChild(newDiv)
    } else {
        Object.values(arr).forEach((item) => {
          let newDiv = document.createElement("div");
          newDiv.classList.add("robot");
          let newImg = document.createElement("img");
          newImg.setAttribute("src", `${item.image}`);
          newDiv.appendChild(newImg);

          let newH3 = document.createElement("h3");
          newH3.textContent = `${item.name}`;
          newH3.classList.add("name");
          newDiv.appendChild(newH3);

          let newH5 = document.createElement("h5");
          newH5.textContent = `${item.email}`;
          newH5.classList.add("email");
          newDiv.appendChild(newH5);

          robotsDiv.appendChild(newDiv);
        });
    }
    
}

