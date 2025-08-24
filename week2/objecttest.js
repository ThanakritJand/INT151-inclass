// object literal
    /* const person = {
        firstname: "Thanakrit" ,
        lastname: "Jand" ,
        age: 19 ,
        isStudent: true ,
        university: "kmutt"
    }

    console.log(person.firstname);
    console.log(person.lastname);

    console.log(person['age']);

    // Nested Object (object ซ้อน object)
    const company = {
        name: "TOA" ,
        contact: {
            email: "contact@toagroup.com" ,
            phone: "02-335-5555"
        }
    }

    console.log(company.name);
    console.log(company.contact);
    console.log(company.contact.email);
    console.log(company.contact.phone);

    // Object Literal + Method (ฟังก์ชันข้างใน object)
    const car = {
        model: "mc-laren" ,
        type: "720s spider" ,
        start: function(){
            console.log("Starting.....");
        } ,
        drive: function(){
            console.log("Driving.....");
        } ,
        stop: function(){
            console.log("Stopping.....");
        }
    }

    car.start()
    car.drive()
    car.stop()

    // Shorthand Property (เขียนสั้น)
    const firstname = "Thanakrit"
    const lastname = "Jand"

    const user = {firstname , lastname}
    console.log(user);
*/
// constructor function
    /* function Person(name , age , email){
        this.name = name
        this.age = age
        this.email = email
        this.sayhi = function(){
            console.log(`Hi , My name is ${this.name}`);
        }
    }

    const p1 = new Person("Max" , 19 , "Max@gmail.com")
    const p2 = new Person("Poon" , 19 , "Poon@gmail.com")

    p1.sayhi()
    p2.sayhi()

    console.log(p1);
    console.log(p2);

    */

// ES6 class
    /* class book {
        constructor(isbn , title){
            this.isbn = isbn
            this.title = title
        }
        getISBN(){
            console.log(this.isbn);
        }
        setTitle(title){
            this.title = title
        }
    }

    const b1 = new book(123345 , "Max")
    const b2 = new book(123346 , "Aom")

    console.log(b1);
    console.log(b2);


    b1.getISBN()
    b2.setTitle("Max and Aom")
    console.log(b2);

    */
// object.create()
    /* mybook = {}
    const journal = Object.create(mybook)
    journal.ISSN = 12348
    console.log(journal);
    journal.title = "AomMaxy"
    console.log(journal);
    journal.page = 123
    console.log(journal);

    */

const b1 = {id:1 , title:"js"}
const b2 = {id:1 , title:"js"}
console.log(b1===b2); // false
console.log(b1==b2);  // false
// memory reference ต่างกัน


// const book1 = {id: 3396226 , title: "Janddrix"}
// const book2 = {id: 1987623 , title: "Potter"}

// function compareBook(book1 , book2){
    
// }