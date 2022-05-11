const urlMain = "https://www.googleapis.com/books/v1/volumes?q=";

let searchTerm = "dog";

const searchButton = document.getElementById("searchBTN");
// let searchTerm = document.getElementById("searchEngine__form").value;

const getSearchUrls = (searchTerm) => {
  return urlMain + searchTerm;
};

const responsePromise = fetch(getSearchUrls(searchTerm));
console.log(responsePromise);
const response = await responsePromise;
console.log(response);
const object = await response.json();
console.log(object);

// object - items[10] - inside array volumeInfo for each book same as below. - need to go through array and get volume info foe each book/number in array.

// const findBookDetails = (object) => {
//   let bookObjects = object.items;
//   for (let i = 0; i < bookObjects.length; i++) {
//     bookDetails[i] += bookObjects[i];
//     console.log(bookObjects);
//   }
// };
const bookDetails = object.items.map((volume) => {
  const bookOutput = {};
  let bookDisplay = bookOutput;
  if (volume.volumeInfo.authors)
    bookOutput.image = volume.volumeInfo.imageLinks.thumbnail;
  bookOutput.title = volume.volumeInfo.title;
  bookOutput.author = volume.volumeInfo.authors[0];
  bookOutput.description = volume.volumeInfo.description;
  // console.log(bookOutput);
  document.getElementById;
  for (let key in bookOutput) {
    console.log(key + ":", bookOutput[key]);
  }
  // let displayBook = {
  //   Title: bookOutput.title,
  //   Image: bookOutput.image,
  //   Author: bookOutput.author,
  //   Description: bookOutput.description,
  // };

  document.getElementById("searchEngine__book-gird__bookOne").innerText =
    bookOutput.title;
});

// document.getElementById("searchEngine__book-gird__bookOne").innerText =
//   object.volume.volumeInfo.title;

// const searchButton = document.getElementById("searchBTN");

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
