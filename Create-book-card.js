const createBookCard = (book) => {
  const outsideDiv = document.createElement("div");
  const image = document.createElement("img");

  image.src = book.volumeInfo.imageLinks?.thumbnail;
  outsideDiv.appendChild(image);

  const heading = document.createElement("h3");
  const headingText = document.createTextNode(
    book.volumeInfo.title ?? "Oops! Kat ate the title."
  );
  heading.appendChild(headingText);
  outsideDiv.appendChild(heading);

  const author = document.createElement("h4");
  const authorText =
    document.createTextNode(book.volumeInfo.authors) ?? "Written by Kat.";
  outsideDiv.appendChild(author);
  author.appendChild(authorText);

  const paragraphDescription = document.createElement("p");
  const paragraphText = document.createTextNode(
    book.volumeInfo.description ?? "Meow, meow, meow."
  );
  outsideDiv.appendChild(paragraphDescription);
  paragraphDescription.appendChild(paragraphText);

  document
    .getElementsByClassName("searchEngine__book-grid")[0]
    .appendChild(outsideDiv);

  return outsideDiv;
};

export default createBookCard;
