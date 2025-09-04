function mergeObject(obj1,obj2){
    // return Object.assign(obj1 , obj2)
    // return {...obj1 , ...obj2}
}
// console.log(mergeObject({name:"Thanakrit" , age:19} , {car:"Mclaren"}));

function addProperty(obj , key ,value){
    // return {...obj , [key]:value}
}
// console.log(addProperty({name:"Thanakrit"} , "age" , 19));

function getFreqOfWords(sentence){
    // if(sentence === null || sentence === undefined) return undefined
    // let words = sentence.toLowerCase().split(' ')
    // const freq = {}
    // for(let i = 0;i< words.length;i++){
    //     let w = words[i]
    //     if(freq[w]){
    //         freq[w]++
    //     }else{
    //         freq[w] = 1
    //     }
    // }
    // return freq
}
// console.log(getFreqOfWords("Today is present and present is your gift"));
// console.log(getFreqOfWords(null));
// console.log(getFreqOfWords(undefined));

function extractAndRename(obj){
    // return {
    //     fullName:obj.name ,
    //     yearOld:obj.age
    // }
}
// console.log(extractAndRename({name:"Thanakrit",age:19,class:2}));

function mergeAndDestructure(obj1 , obj2){
//     const merge = {...obj1 , ...obj2}
//     return {
//         name: merge.name ,
//         age: merge.age
//     }
}
// console.log(mergeAndDestructure({name:"Thanakrit" , age:19} , {car:"Mclaren"}));
// console.log(mergeAndDestructure({name:"Thanakrit"} , {age:40 , car:"Mclaren"}));

function removeDuplicatesWords(sentence){
    // if(sentence === null || sentence === undefined || sentence === "") return ""
    // let word = sentence.split(" ")
    // const undub = []
    // for(let i = 0;i < word.length;i++){
    //     let w = word[i]
    //     if(undub.indexOf(w) === -1){
    //         undub.push(w)
    //     }
    // }
    // return undub.join(" ")
}
// console.log(removeDuplicatesWords("One two two"));

function findValue(arr){
    // const sort = arr.sort((a , b) => a - b)
    // const sum = arr.reduce((acc , curr) => {
    //     return curr += acc
    // })
    // return {
    //     min:sort[0] ,
    //     max:sort[sort.length - 1] ,
    //     sum: sum ,
    //     avg: sum/arr.length
    // }
}
// console.log(findValue([1,2,3,4,5]));


