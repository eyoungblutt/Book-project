const createBookCard = (book) => {
  const outsideDiv = document.createElement("div");
  const image = document.createElement("img");
  image.src = book.volumeInfo.imageLinks.thumbnail;
  console.log(image);
  outsideDiv.appendChild(image);

  image.style.maxHeight = "200px";
  image.style.maxwidth = "200px";

  const heading = document.createElement("h3");
  const headingText = document.createTextNode(
    book.volumeInfo.title ?? "Oops! Kat ate the title."
  );
  heading.appendChild(headingText);
  outsideDiv.appendChild(heading);
  const author = document.createElement("h4");
  const authorText = document.createTextNode(book.volumeInfo.authors);
  outsideDiv.appendChild(author);
  author.appendChild(authorText);

  const paragraphDescription = document.createElement("p");
  const paragraphText = document.createTextNode(
    book.volumeInfo.description ?? "Written by cats."
  );
  outsideDiv.appendChild(paragraphDescription);
  paragraphDescription.appendChild(paragraphText);

  document
    .getElementsByClassName("searchEngine__book-grid")[0]
    .appendChild(outsideDiv);

  return outsideDiv;
};

export default createBookCard;
