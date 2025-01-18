class Book {
  constructor(title, author, available = true) {
    this.title = title;
    this.author = author;
    this.available = available;
  }
}
const library = {
  books: [],

  addBook(title, author) {
    newBook = new Book(title, author);
    this.books.push(newBook);
    console.log(
      `Added "${newBook.title}" by ${newBook.author} to the library!\nThere are now ${this.books.length} books in the library's database.`
    );
  },
  checkOutBook(title) {
    let found = false;
    for (let book of this.books) {
      if (book.title === title) {
        found = true;
        if (book.available) {
          book.available = false;
          console.log(`Check out: ${book.title}`);
        } else {
          console.log(
            `The book with title ${title} is not available at the moment!`
          );
        }

        break;
      }
    }
    if (!found) {
      console.log(`The book with title ${title} is not found!`);
    }
  },

  getAvailableBooks() {
    //let availableBooks = this.books.filter((book) => book.available); using filter
    let availableBooks = [];
    for (let book of books) {
      if (book.available) {
        availableBooks.push(book.title);
      }
    }
    console.log(
      `There are ${
        availableBooks.length
      } titles currently on the shelf:\n${availableBooks.join(", ")}`
    );
    //return availableBooks;
  },
};
