
// console.log(car.length);
// console.log(car.indexOf("BMW"))
// console.log(`First Item: ${car[0]}`);
// console.log(`Last Item: ${car[car.length - 1]}`);
// console.log("-------------------------------------------------------------------------------------");
// console.log("");



// for(let i = 0;i < car.length;i++){
    //     console.log(`name:${car[i]}`);
    //     console.log(`type: ${typeof(car[i])}`);
    //     console.log(`index: ${i}`);
    //     console.log('----------------------------------------------------------------------------------------------');
    
    // }
    
// const car = ["BMW" , true , 2 , null]
// console.log(car);
// car.push("poon")
// console.log(car);
// car.pop()
// console.log(car);
// car.shift()
// console.log(car);
// delete car[2]
// console.log(car);
// for(let i = 0;i < car.length;i++){
//     console.log(`index${i}: ${car[i]}`);
// }

// car.forEach(n => {
//     console.log(`index: ${n}`); 
// })

const car = [
    {type:"BMW" , model:"330d" , year:2019} ,
    {type:"Honda" , model:"civic" , year:2019} ,
    {type:"Toyota" , model:"camry" , year:2025}
]

console.log(car);

const manyType = [
    [1 , 2 , 3] ,
    ["Poon" , "Apinan" , "Mokun"] ,
    [true , false]
]

console.log(manyType);

const cars = {
    name: "Porche",
    model:"911 GT3",
    year: [
        2019 , 2020
    ]
}
console.log(cars);

const colors=[{id:1, name:'red', tone:'hot'},{id:2, name:'purple', tone:'cool'},{id:3, name:'white', tone:'neutral'}]
console.log(colors)
 
const contacts=[{email:['abc@gmail.com','foo@kmutt.ac.th']},
{address:['Bangkok', 'Puket']}]
console.log(contacts)
 
//array contains many arrays
const groups=[['Malee', 'Jane'], ['John', 'Jay', 'Pete']]

groups.map(group => {
    console.log(group[group.length - 1]);
});

groups.forEach(group => {
    console.log(group[group.length - 1]);
})

for(let i = 0;i < groups.length;i++){
    const lastIndex = groups[i][groups[i].length - 1]
    console.log(lastIndex);
}

for(x of groups){
    console.log(x[x.length - 1]);
}

// -----------------------------------------------------------------------------------------------------------
// Array literals
const arr = [1 , 2 , 3]
console.log(arr); //[1 , 2 , 3]

// ... spread
let a = [1 , 2 , 3]
let b = [0 , ...a , 4]
console.log(b); //[0 , 1 , 2 , 3 , 4]

// Array() Constructor
const arr1 = new Array()
const arr2 = new Array(20)
const arr3 = new Array(1,2,3,4,5,6)
console.log(arr1);
console.log(arr2);
console.log(arr3);

// Array.of() factory menthod
const ar1 = Array.of()
const ar2 = Array.of(20)
const ar3 = Array.of(1,2,3,4,5,6)
console.log(ar1);
console.log(ar2);
console.log(ar3);

const i = Array.of(1,2,3)
const k = Array.from(i)
console.log(k);
