create search page with:

- header introducing the page
- a form containing text input
- a submit button
- a search button
- a grid of books
- pick a palette
- plan design
- figma or wireframe pro
  use BEM
- each block should have its own SCSS file
  -palette should ue variables

  ## Instructions:

- When the submit button is clicked you need the request books from the
  Google books API using the input value as your query string
- The books that you receive should be rendered in the books grid.
- Each book in the grid should have an image, author, title and description
- The grid should be responsive on different screen sizes
- You should use async / await for your request code, NOT .then

-link API

## DOM steps

-should have 10 items showing - you can request via API how many results you want - up to 10 results

enter in search terms - do they need to be writtne in a specific way?

- when I click go hunting it calls the API based on what has been entered. - you would need a DOM add event listener to be used.

It then displays in the objecct function.

the text needs to display in the book template- class name "searchEngine**book-gird**book" - should this be an array?

- have the object results fill into the inamges/object cunction we have created.- the HTML list we have created.
