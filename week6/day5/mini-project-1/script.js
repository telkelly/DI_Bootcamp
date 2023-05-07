const searchBtn = document.getElementById("search");

let quotes = [
  {
    id: 0,
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    id: 1,
    author: "Albert Einstein",
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  },
  {
    id: 2,
    author: "Bernard M. Baruch",
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  },
  {
    id: 3,
    author: "Oscar Wilde",
    quote: "Always forgive your enemies; nothing annoys them so much.",
  },
  {
    id: 4,
    author: "Friedrich Nietzsche",
    quote: "Without music, life would be a mistake.",
  },
  {
    id: 5,
    author: "H. Jackson Brown Jr.",
    quote:
      "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
  },
  {
    id: 6,
    author: "Will Ferrell",
    quote:
      "Before you marry a person, you should first make them use a computer with slow Internet to see who they really are.",
  },
  {
    id: 7,
    author: "Ellen DeGeneres",
    quote:
      "Never follow anyone else’s path. Unless you’re in the woods and you’re lost and you see a path. Then by all means follow that path.",
  },
];

let word;

const generateRandomQuote = () => {
  const quote = document.getElementById("quote");
  quote.innerHTML = "";
  let arrIndex = Math.floor(Math.random() * quotes.length);
  let newParag = document.createElement("p");
  let newSpan = document.createElement("span");
  newParag.append(quotes[arrIndex].quote);
  newSpan.append(quotes[arrIndex].author);
  word = quotes[arrIndex].quote;
  quote.appendChild(newParag);
  quote.appendChild(newSpan);
};

const addNewQuote = () => {
  let currentId = 7;
  const inputQuote = document.getElementById("inputQuote").value;
  const inputAuthor = document.getElementById("inputAuthor").value;
  console.log(inputQuote);
  console.log(inputAuthor);
  quotes.push({
    id: ++currentId,
    author: inputAuthor,
    quote: inputQuote,
  });
};

const numOfCharactersWSpaces = () => {
  const numOfCharactersWSpacesSpan = document.getElementById(
    "numOfCharactersWSpacesSpan"
  );
  let store = 0;
  for (let one of word) {
    store++;
  }
  return numOfCharactersWSpacesSpan.append(`The number is ${store}`);
};

const numOfCharactersWithoutSpaces = () => {
  const numOfCharactersWSpacesSpan = document.getElementById(
    "numOfCharactersWithoutSpacesSpan"
  );
  let store = 0;
  for (let one of word) {
    store++;
    if (one == " ") {
      store--;
    }
  }
  return numOfCharactersWithoutSpacesSpan.append(`The number is ${store}`);
};

const numOfWords = () => {
  const numOfWordsSpan = document.getElementById("numOfWordsSpan");
  let arr = word.split(" ");
  let store = 0;
  for (let i = 0; i < arr.length; i++) {
    store++;
  }
  return numOfWordsSpan.append(store);
};

searchBtn.addEventListener("click", function () {
  const nameOfAuthor = document.getElementById("nameOfAuthor").value;
  const filteredQuote = document.getElementById("filteredQuote");
  const filteredAuthor = document.getElementById("filteredAuthor");
  const filter = document.getElementsByClassName("filter").item(0);
  quotes.forEach((item) => {
    //  console.log(item.author);
    if (item.author == nameOfAuthor) {
      filter.innerHTML = item.quote;
      filter.innerHTML = item.author;
     // filteredQuote.innerHTML = item.quote;
     // filteredAuthor.innerHTML = item.author;
      console.log(5);
    } else {
      console.log(6);
    }
  });
});
