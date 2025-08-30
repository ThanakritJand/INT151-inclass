// anonymous function
const word = ["Car" , "Limit" , "Present" , "discuss"]
const result = word.filter(w => w.length > 5)
console.log(result);
// array method
const words = ['mango' , 'apple' , 'mangosteen' , 'orange']
const Upper = words.map(w => {
    return w.toUpperCase()
})

console.log(Upper);

const students = [
  { id: 1, name: "Somchai Jaidee" },
  { id: 2, name: "Suda Deejai" },
  { id: 3, name: "John Smith" },
]

const id = students.map(s => s.id)
const idEven = id.filter(s => s % 2 === 0)
console.log(idEven);

const Words = ["Mango" , "Apple" , "mangosteen" , "orange" , "mangos"]
const lower = Words.map(w => w.toLowerCase())
const findApple = lower.filter(w => w.includes("apple"))
if(findApple){
    console.log("has apples");
}else{
    console.log("does not has apples");
}
// console.log(Words.filter(s => s.includes("mango")).toLowerCase());
// console.log(words);
// const sordW = words.sort()
// console.log(sordW);

// array Iterator method
    /* foreach */

// Stack and Queue method
// Subarray Method
// Searching and Sorting method
// Array to string Convesation