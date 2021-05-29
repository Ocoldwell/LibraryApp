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
console.log(myLibrary);
const generateLibrary = (library) => {
  library.forEach(book => {
    console.log(book);
    const bookElement = document.createElement('div');
    console.log(bookElement);
    document.body.appendChild(bookElement);
    const bookTitle = document.bookElement.createElement('h3');
    bookTitle.innerHTML = book.title;
    const bookPages = document.bookElement.createElement('p');
    bookTitle.innerHTML = book.pages;
    const bookRead = document.bookElement.createElement('input');
    bookRead = book.haveRead;
    document.bookElement.appendChild(bookTitle, bookPages, bookRead);
    
  })
}

generateLibrary(myLibrary);

