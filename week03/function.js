// function เรียกใข้ได้หลายครี้ง
// function declearation
    /* function (Camel case) (){
        scope
    }*/

    // example
    /* function multiply(a , b){
        return a * b
    } */
    // console.log(multiply(999 , 8877));

    // arrow function (function expresstion)
    // const Multiply =  (a , b) => {return a * b} ;
    // console.log(Multiply(5 , 9));

// function expresstion (using function declearation)
    // const multiply3 = function(a , b){return a * b}
    // console.log(multiply3(3,4));

/* console.log(typeof multiply)
console.log(typeof Multiply)
console.log(typeof multiply3)
const x=multiply
const y=Multiply
const z=multiply3
console.log(typeof x)
console.log(typeof y)
console.log(typeof z)
console.log(x(2,3))
console.log(y(3,3))
console.log(z(4,3))
let a=1
let b=a
console.log( typeof a)
console.log( typeof b)
if(x===multiply)
    console.log("x equals to multiply1")
else
    console.log('x not equals to multiply1')

*/

// pass function
/* function multiply4(a,b){
    return a * b
}
function doSomething(x){ //x = multiply4
    // return x(3 , 5) // multiply(3 , 5)
    return x // [function: multiply4]
}
const y = (doSomething(multiply4)); //pass function to another function ===> 15
console.log(y); */

// Higher-order function
function sayGoodbye(){
    return 'Good bye'
}
function doSomething(){
    return sayGoodbye
}

console.log(doSomething()());
//doSomething() [first ()]=> sayGoodBye()[ second ()]

function myFunc(theObject){
    theObject.model = 'A9999'
}

const product = {model: "A0001" , price: 199}
console.log(product.model);

myFunc(product);
console.log(product.model);

function sumArr(arr){
    let sum = 0
    for(let i = 0; i < arr.length ; i++){
        sum += arr[i]
    }
    return sum
}

function greeting(greet = "Hello" , whom = "Guest" , quote = "How are you???"){
    return `${greet} ${whom} ${quote}`
}

console.log(greeting("hi"));
console.log(greeting("Good Morning" , "Guy" , "Great!!"));
console.log(greeting(undefined , null , "find"));
console.log(greeting());

function sum(num1 , num2 ,num3){
    return num1 + num2 + num3
}
let nums = [5 , 10 , 15]
console.log(sum(...nums));