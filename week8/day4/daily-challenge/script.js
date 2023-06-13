const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const searchButton = document.getElementById("searchButton");
const deleteAllButton = document.getElementById("deleteAllButton");
const gifContainer = document.getElementById("gifContainer");

searchButton.addEventListener("click", fetchRandomGif);
deleteAllButton.addEventListener("click", deleteAllGifs);

function fetchRandomGif() {
  const categoryInput = document.getElementById("categoryInput").value;
  if (categoryInput.trim() === "") {
    alert("Please enter a category.");
    return;
  }

  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${categoryInput}`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.data && data.data.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.data.length);
        const gifUrl = data.data[randomIndex].images.original.url;
        const gifElement = createGifElement(gifUrl, categoryInput);
        gifContainer.appendChild(gifElement);
      } else {
        alert("No GIF found for the specified category.");
      }
    })
    .catch((error) => {
      console.log("An error occurred while fetching the GIF:", error);
    });
}

function createGifElement(url) {
  const gifElement = document.createElement("div");
  gifElement.classList.add("gif");

  const gifImg = document.createElement("img");
  gifImg.src = url;
  gifElement.appendChild(gifImg);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    gifElement.remove();
  });
  gifElement.appendChild(deleteButton);

  return gifElement;
}

function deleteAllGifs() {
  while (gifContainer.firstChild) {
    gifContainer.firstChild.remove();
  }
}
