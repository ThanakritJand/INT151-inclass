// let car = {
//     brand: "Honda" , 
//     model: "Civic" ,
//     year: 2020
// }

// console.log(car);

// console.log(car.brand);

// car.year = 2024
// console.log(car.year);

// car.color = "black"
// console.log(car);

// let person = {
//     firstname: "Thanakrit" ,
//     lastname: "Jand" ,
//     age: 19 ,

//     getFullname: function(){
//         return `My name is ${this.firstname} ${this.lastname}`
//     } ,
//     celebrateBirthday: function(){
//         this.age++
//     }
// }

// console.log(person.getFullname());

// console.log(person.age);

// person.celebrateBirthday()
// console.log(person.age);

// let school = { 
//     name: "KMUTT" ,
//     address: {
//         city: "bangkok" ,
//         country: "Thailand"
//     } ,
//     students: [
//         {   id: 33450 ,
//             firstname: "Thanakrit" ,
//             lastname: "Jand" ,
//             grade: [80 , 50 , 89 , 67] ,
//             getAverageGrade: function(){
//                 let sum = 0
//                 for(let i = 0; i < this.grade.length; i++){
//                     sum += this.grade[i]
//                 }
//                 return `AVG Grade is ${sum / this.grade.length}`
//             }
//         } ,
//         {   id: 33451 ,
//             firstname: "Kamolporn" ,
//             lastname: "Pradubdee" ,
//             grade: [80 , 99 , 89 , 89] ,
//             getAverageGrade: function(){
//                 let sum = 0
//                 for(let i = 0; i < this.grade.length; i++){
//                     sum += this.grade[i]
//                 }
//                 return `AVG Grade is ${sum / this.grade.length}`
//             }
//         }
//     ]
// }

// console.log(school.name);

// console.log(school.address.country);

// console.log(`${school.students[0].firstname} ${school.students[0].lastname}`);

// console.log(school.students[0].getAverageGrade());

// school.students.push({
//     id: 33452 ,
//     firstname: "Poonyawat" ,
//     lastname: "kansuwan" ,
//     grade: [70 , 99 , 69 , 89] ,
//     getAverageGrade: function(){
//         let sum = 0
//         for(let i = 0; i < this.grade.length; i++){
//             sum += this.grade[i]
//         }
//         return `AVG Grade is ${sum / this.grade.length}`
//     }
// })
// console.log(school.students);


const store = {
    name: "MaxStore" ,
    product: [
        {id: 10001 , name: "Macbook" , price:35000 , stock: 30} ,
        {id: 10002 , name: "IPhone" , price:45000 , stock: 20} ,
        {id: 10003 , name: "IPad" , price: 40000 , stock: 29} ,
        {id: 10004 , name: "Airpord" , price: 9000 , stock: 203} ,
        {id: 10005 , name: "Adapter" , price:2000 , stock:100} 
    ] ,
    orders: [
        {orderID: 1 , item: [{productID: 10001 , quantity: 1} , {productID:10002 , quantity: 1}]},
        {orderID: 2 , item: [{productID: 10002 , quantity: 1} , {productID:10004 , quantity: 3}]}
    ]
}

// 1. คำนวณราคารวมของแต่ละ order

























































































































































































































































































// 2. คำนวณยอดขายรวมทั้งหมด

// 3. หาสินค้าที่ขายดีที่สุด

// 4. อัปเดต stock ของสินค้า

// 5. (Bonus) เขียน method getTopSellingProduct()