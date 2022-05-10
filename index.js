const urlMain = "https://www.googleapis.com/books/v1/volumes?q=";

const searchButton = document.getElementById("searchBTN");

console.log(searchButton);
console.log(document.getElementById("searchEngine__form"));

searchButton.addEventListener("click", () => {
  let searchTerm = document.getElementById("searchEngine__form").value;
  const getSearchUrl = (searchTerm) => {
    return urlMain + searchTerm;
  };
  const search = async (searchTerm) => {
    const requestPromise = fetch(getSearchUrl(searchTerm));

    const response = await requestPromise;
    const searchData = await response.json();
  };

  const bookDetails = searchData.items.map((volume) => {
    const bookOutput = {};
    if (volume.volumeInfo.authors)
      bookOutput.image = volume.volumeInfo.imageLinks.thumbnail;
    bookOutput.title = volume.volumeInfo.title;
    bookOutput.author = volume.volumeInfo.authors[0];
    bookOutput.description = volume.volumeInfo.description;
    return bookOutput;
  });
  bookDetails.document.getElementsByClassName(
    "searchEngine__book-gird__bookOne"
  ).innerText = bookDetails;
});
