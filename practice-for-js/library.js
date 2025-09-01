class Book{
    constructor(title , author ,year){
        this.title = title
        this.author = author
        this.year = year
        this.isAvialble = true
    }
}
const library = [
  new Book("The Hobbit", "J.R.R. Tolkien", 1937, true),
  new Book("1984", "George Orwell", 1949, false),
  new Book("Clean Code", "Robert C. Martin", 2008, true),
  new Book("The Pragmatic Programmer", "Andrew Hunt", 1999, true),
  new Book("Atomic Habits", "James Clear", 2018, false)
];

function findAvilable(){
    return library.filter(book => book.isAvialble = true)
}

function getInfo(){
    return library.map(b => `${b.title} by ${b.author} (${b.year})`)
}

function findBook(title){
    return library.find(t => t.title = title)
}

function beforeY2K(){
    return library.some(y => y.year < 2000)
}

function getLatestBook(books){
    return books.reduce((acc , curr) => {
        return curr.year > acc.year ? curr : acc;
    })     
}

// const findAvilable = library.filter(book => book.isAvialble = true)
// const yaer = library.map()
// const findBook = library.find()
