// Task 1 : Define the Book Constructor
class Book {
  constructor(title, author, available = true) {
    this.title = title;
    this.author = author;
    this.available = available;
  }
}

// Task 2: Create Methods to Manage Books
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
    try {
      let found = false;
      for (let book of this.books) {
        if (book.title === title) {
          found = true;
          if (book.available) {
            book.available = false;
            console.log(`Check out: ${book.title}`);
          } else {
            throw new Error(
              `The book with title ${title} is not available at the moment!`
            );
          }

          break;
        }
      }
      if (!found) {
        throw new Error(`The book with title ${title} is not found!`);
      }
    } catch (er) {
      console.log(er.message);
    }
  },

  getAvailableBooks() {
    //let availableBooks = this.books.filter((book) => book.available); using filter
    let availableBooks = [];
    for (let book of this.books) {
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

// Task 3: Use JSON Data to Add Books to the Library
const newBooks = `[
{"title": "Eloquent JavaScript", "author": "Marijn Haverbeke"},
{"title": "JavaScrip:The Good Parts", "author":"Douglas Crockford"},
{"title": "You Don't Kno JS: Scope & Closures", "author":"Kyle Simpson"}
]`; //{"title": "", "author":""};

function receiveBooks(bookData) {
  console.log(`Adding new books to our shelves!`);
  const boosToAdd = JSON.parse(bookData);
  for (let book of boosToAdd) {
    library.addBook(book.title, book.author);
  }
}

//Task 4: Utilize Error Handling

// Tests
console.log(
  `There are currently ${library.books.length} books in the library's database.`
);
library.addBook("Eloquent JavaScript", "Marijn Haverbeke");
receiveBooks(newBooks);
library.checkOutBook("Eloquent JavaScript");
library.checkOutBook("Grokking the Coding Interview");
library.getAvailableBooks();
