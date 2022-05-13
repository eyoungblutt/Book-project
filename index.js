import createBookCard from "./Create-book-card.js";

const urlMain = "https://www.googleapis.com/books/v1/volumes?q=";

let searchButton = document.getElementById("searchBTN");

const getSearchUrls = (searchTerm) => {
  return urlMain + searchTerm;
};

const clearResult = () => {
  document.getElementById("searchEngine__form").vaule = "";
  document.getElementsByClassName("searchEngine__book-grid").innerText = "";
};
const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

refreshButton.addEventListener("click", () => {
  clearResult();
  removeAllChildNodes(
    document.getElementsByClassName("searchEngine__book-grid")[0]
  );
});

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
