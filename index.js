let inputValue = document.getElementById("searchEngine__form").change;
let searchTerm = (document.getElementById("searchEngine__form").innerHTML =
  inputValue);

console.log(searchTerm);

const urlMain = "https://www.googleapis.com/books/v1/volumes?q=";

let searchButton = document.getElementById("searchBTN");

// searchButton.addEventListener("click", () => {
//   return document.getElementById("searchEngine__form").change;
// });
console.log(searchButton);
console.log(document.getElementById("searchEngine__form"));

searchButton.addEventListener("click", () => {
  const bookDetails = object.items.map((volume) => createBookCard(volume));
  console.log(document.getElementsByClassName("searchEngine__book-grid")[0]);
  console.log(bookDetails);

  bookDetails.forEach((element) =>
    document
      .getElementsByClassName("searchEngine__book-grid")[0]
      .appendChild(element)
  );
});

const getSearchUrls = (searchTerm) => {
  return urlMain + searchTerm;
};

const createBookCard = (bookObject) => {
  const outsideDiv = document.createElement("div");
  const image = document.createElement("img");
  image.src = bookObject.volumeInfo.imageLinks.thumbnail;
  console.log(image);
  outsideDiv.appendChild(image);

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

  return outsideDiv;
};

const responsePromise = fetch(getSearchUrls(searchTerm));
const response = await responsePromise;
const object = await response.json();

// document
//   .getElementsByClassName("searchEngine__book-grid")[0]
//   .appendChild(bookDetails[0]);
//const bookOutput = {};
//get element by id for div you want to put bookDetails in and append child.

//if (volume.volumeInfo.authors)
//  bookOutput.image = volume.volumeInfo.imageLinks.thumbnail;
//bookOutput.title = volume.volumeInfo.title;
//bookOutput.author = volume.volumeInfo.authors[0];
//bookOutput.description = volume.volumeInfo.description;
// console.log(bookOutput);
//document.getElementById;
//for (let key in bookOutput) {
// console.log(key + ":", bookOutput[key]);
//}
//

//const outsideDiv = document.createElement("div")
//const heading = document.createElement("h3");
//const headingText = document.createTextNode()
//append child - puts textnode inside h3 element then append it to the div
//p for decription
//node for paragraph text - parse bookObject.description
//same for image
//

// console.log(searchButton);
// console.log(document.getElementById("searchEngine__form"));

// searchButton.addEventListener("click", () => {
//   let searchTerm = document.getElementById("searchEngine__form").value;
//   const getSearchUrls = (searchTerm) => {
//     return urlMain + searchTerm;
//   };
//   const search = async (searchTerm) => {
//     const requestPromise = fetch(getSearchUrl(searchTerm));

//     const response = await requestPromise;
//     const searchData = await response.json();

//     const bookDetails = searchData.items.map((volume) => {
//       const bookOutput = {};
//       if (volume.volumeInfo.authors)
//         bookOutput.image = volume.volumeInfo.imageLinks.thumbnail;
//       bookOutput.title = volume.volumeInfo.title;
//       bookOutput.author = volume.volumeInfo.authors[0];
//       bookOutput.description = volume.volumeInfo.description;
//       return bookOutput;
//     });
//     bookDetails.document.getElementsByClassName(
//       "searchEngine__book-gird__bookOne"
//     ).innerText = bookDetails;
//   };
// });
