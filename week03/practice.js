function getFreqOfWord(sentence) {
    if (sentence === null || sentence === undefined || typeof sentence !== 'string') 
        return undefined
    
    let words = sentence.toLowerCase().split(' ')
    let freq = {}

    for (let i = 0; i < words.length; i++) {
        let w = words[i]
        if (freq[w]) {
            freq[w]++   // ถ้ามีคำนี้แล้วให้บวกเพิ่ม
        } else {
            freq[w] = 1 // ถ้ายังไม่เคยเจอคำนี้ ให้เริ่มที่ 1
        }
    }

    return freq
}


// console.log(getFreqOfWord("Today is present and present is your gift"));
// console.log(getFreqOfWord(null));
// console.log(getFreqOfWord(undefined));

function isPalindrome(word){
    if (word === null || word === undefined || typeof word !== 'string') 
        return undefined
    for(let i = 0; i < word.length;i++){
        if(word[i] === word[word.length - 1 - i]){
            return true
        }else{
            false
        }
    }
}

// console.log(isPalindrome("Racecar"))  

function reverseString(str){
    let reverse = ""
    for(let i = str.length - 1; i >= 0; i--){
        reverse += str[i]
    }
    return reverse
}
// console.log(reverseString("hello"));

function findMax(arr){
    let max = ""
    for(let i = 0;i < arr.length;i++){
        let num = arr[i]
        if(num > max){
            max = num
        }
    }
    return max
}

// console.log(findMax([1, 200, 9, 10, 50]));

function sumArray(arr){
    let sum = 0
    for(let i = 0;i < arr.length;i++){
        sum += arr[i]
    }
    return sum
}
// console.log(sumArray([1, 2, 3, 4]));

function countVowels(str){
    const Vowel = ["a" , "e" , "i" , "o" , "u" , "A" , "E" , "I" , "O" , "U"]
    let count = 0
    for(let i = 0;i < str.length;i++){
        for(let j = 0;j < Vowel.length;j++){
            if(str[i] === Vowel[j]){
                count++
            }
        }
    }
    return `Vowels: ${count}`
}

// console.log(countVowels("apple"));

function removeDuplicates(arr){
    let num = []
    for(let i = 0;i < arr.length;i++){
        let n = arr[i]
        if(num !== n){
            num.push(n)
        }
    }
    return num
}
console.log(removeDuplicates([1,2,2,3,4,4,5]));
