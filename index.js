import createBookCard from "./Create-book-card.js";

const urlMain = "https://www.googleapis.com/books/v1/volumes?q=";

let searchButton = document.getElementById("searchBTN");

const getSearchUrls = (searchTerm) => {
  return urlMain + searchTerm;
};

const callAPI = async (searchTerm) => {
  const responsePromise = fetch(getSearchUrls(searchTerm));
  const response = await responsePromise;
  const object = await response.json();
  object.items.map(createBookCard);
};

searchButton.addEventListener("click", () => {
  let searchTerm = document.getElementById("searchEngine__form").value;
  callAPI(searchTerm);
});

createBookCard(callAPI);
