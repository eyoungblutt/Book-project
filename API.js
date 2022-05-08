const urlMain = "https://www.googleapis.com/books/v1/volumes?q=";

let searchTerm = "cats";
const getSearchUrl = (searchTerm) => {
  return urlMain + searchTerm;
};

const search = async (searchTerm) => {
  const requestPromise = fetch(getSearchUrl(searchTerm));
  const response = await requestPromise;
  const searchData = await response.json();
  // console.log(searchData);
  // console.log(searchData.items[0].volumeInfo.title);

  // how to have a specific part of the information array show up.

  const bookDetails = searchData.items.map((volume) => {
    const bookOutput = {};
    if (volume.volumeInfo.authors)
      bookOutput.image = volume.volumeInfo.imageLinks.thumbnail;
    bookOutput.title = volume.volumeInfo.title;
    bookOutput.author = volume.volumeInfo.authors[0];
    // else bookOutput.author = "Oops! Kat saw a mouse and hasn't been able to find an author";
    bookOutput.description = volume.volumeInfo.description;

    return bookOutput;
  });

  console.log(bookDetails);
};
// This will make an array of objects with each object being the title, author and description of a book

// mapping out the process to finding your data - the items is an array and you accessed the first in the array.
// searchData.items[0].volumeInfo. then authors or image or title. You can show different books by having the array number change. - so you can show 0-6 books with the array as [0], [1], [2] etcs
// do this as a loop s they get one book at a time.
