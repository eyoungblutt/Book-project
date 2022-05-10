const urlMain = "https://www.googleapis.com/books/v1/volumes?q=";

let searchTerm = "dog";

const getSearchUrls = (searchTerm) => {
  return urlMain + searchTerm;
};

const responsePromise = fetch(getSearchUrls(searchTerm));
// console.log(responsePromise);
const response = await responsePromise;
// console.log(response);
const object = await response.json();
// console.log(object);
const bookDetails = object.items.map((volume) => {
  const bookOutput = {};
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
//   bookOutput;

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
// });
