// Name: Library Book Manager
// Instruction:
// Create an object book with the following properties:

// title (string)

// author (string)

// year (number)

// isAvailable (boolean)

// Then:

// Write a method getSummary() that returns a string with book details.

// Write a function toggleAvailability(book) that switches the value of isAvailable.

// Create an array of 3 book objects and write code to:

// Find all books by a specific author.

// Get the titles of all available books.

class Book{
    constructor(title , author , year = null){
        this.title = title
        this.author = author
        this.year = year
        this.isAvailable = true
    }

    getSummery(){
        return `"${this.title} by ${this.author} (${this.year})"`
    }
    toggleAvailability(){
        this.isAvailable = !this.isAvailable
    }
}

// Create an array of 3 book objects
const library = [
  new Book("The Hobbit", "J.R.R. Tolkien", 1937),
  new Book("1984", "George Orwell", 1949),
  new Book("Clean Code", "Robert C. Martin", 2008)
];

// Find all books by a specific author.
// const findAuthor = library.