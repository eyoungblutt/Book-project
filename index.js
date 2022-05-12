const urlMain = "https://www.googleapis.com/books/v1/volumes?q=";

let searchButton = document.getElementById("searchBTN");
const getSearchUrls = (searchTerm) => {
  return urlMain + searchTerm;
};

const callAPI = async (searchTerm) => {
  const responsePromise = fetch(getSearchUrls(searchTerm));
  const response = await responsePromise;
  const object = await response.json();

  console.log(object);
  object.items.map(createBookCard);
};

searchButton.addEventListener("click", () => {
  let searchTerm = document.getElementById("searchEngine__form").value;
  callAPI(searchTerm);
});

const createBookCard = (bookObject) => {
  const outsideDiv = document.createElement("div");
  const image = document.createElement("img");
  image.src = bookObject.volumeInfo.imageLinks.thumbnail;
  console.log(image);
  outsideDiv.appendChild(image);

  image.style.maxHeight = "200px";
  image.style.maxwidth = "200px";

  const heading = document.createElement("h3");
  const headingText = document.createTextNode(
    bookObject.volumeInfo.title ?? "Oops! Kat ate the title."
  );
  heading.appendChild(headingText);
  outsideDiv.appendChild(heading);
  const author = document.createElement("h4");
  const authorText = document.createTextNode(bookObject.volumeInfo.authors);
  outsideDiv.appendChild(author);
  author.appendChild(authorText);

  const paragraphDescription = document.createElement("p");
  const paragraphText = document.createTextNode(
    bookObject.volumeInfo.description ?? "Written by cats."
  );
  outsideDiv.appendChild(paragraphDescription);
  paragraphDescription.appendChild(paragraphText);

  paragraphDescription.style.textOverflow = "ellipsis";

  outsideDiv.style.backgroundColor = "white";
  outsideDiv.style.margin = "10px";
  outsideDiv.style.padding = "5px";
  outsideDiv.style.backgroundColor = "white";
  outsideDiv.style.borderRadius = "5px";
  outsideDiv.style.maxHeight = "500px";
  outsideDiv.style.maxWidth = "300px";
  outsideDiv.style.fontFamily = "Gloria Hallelujah";
  document
    .getElementsByClassName("searchEngine__book-grid")[0]
    .appendChild(outsideDiv);

  return outsideDiv;
};
