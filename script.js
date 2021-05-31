let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.haveRead ? "read" : "not read yet"
    }`;
  };
}

const addBookToLibrary = (title, author, pages, haveRead) => {
  myLibrary.push(new Book(title, author, pages, haveRead));
};

addBookToLibrary('The Hobbit', 'J.R.R.Tolkien', 255, true)
addBookToLibrary('Catch 22', 'Joseph Heller', 255, false)
const generateLibrary = (library) => {
  library.forEach(book => {
    const bookElement = document.createElement('div')
    document.body.appendChild(bookElement);
    const bookTitle = document.createElement('h3');
    bookTitle.innerHTML = book.title;
    bookElement.appendChild(bookTitle)
    const bookPages = document.createElement('p');
    bookPages.innerHTML = book.pages;
    bookElement.appendChild(bookPages);
    const bookRead = document.createElement('input');
    bookRead.innerHTML = book.haveRead;
    bookElement.appendChild(bookRead)
  })
}

generateLibrary(myLibrary);

