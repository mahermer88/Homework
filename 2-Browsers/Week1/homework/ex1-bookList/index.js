//cspell: disable
/*
  
 ** Exercise 1: The book list **

  I'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

*/
//cspell: enable

function createBookList(books) {
  // your code goes in here, return the ul element

  //Use a <ul> to display the books.
  const booksList = document.createElement('ul');

  //Iterate through the array of books.
  books.forEach((book) => {
    const { title, author, alreadyRead } = book;

    //For each book, create a `<p>`element with the book title and author and append it to the page.
    const element = document.createElement('p');
    element.textContent = title + ' - ' + author;

    //Use a <li> to display the books.
    const listElement = document.createElement('li');
    listElement.appendChild(element);
    listElement.style.width = '400px';
    listElement.style.marginRight = '20px';
    listElement.style.padding = '10px';

    //Add an <img> to each book that links to a URL of the book cover.
    const cover = document.createElement('img');
    const titleEdit = title.replace(/ /g, '_').toLowerCase() + '.jpg';
    cover.src = 'assets' + '/' + titleEdit;
    cover.alt = title;
    cover.style.height = '250px';
    listElement.appendChild(cover);

    //Change the style of the book depending on whether you have read it (green) or not (red).
    if (alreadyRead === true) {
      listElement.style.backgroundColor = 'green';
    } else {
      listElement.style.backgroundColor = 'red';
    }

    //append all listElements to the booksList.
    booksList.appendChild(listElement);
  });

  //change the style of list to inline
  booksList.style.listStyle = 'none';
  booksList.style.display = 'flex';
  return booksList;
}

const myBooks = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
  },
];

const ulElement = createBookList(myBooks);

document.querySelector('#bookList').appendChild(ulElement);
