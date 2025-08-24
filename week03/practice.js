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

function removeDuplicates(arr){
    if(arr === null || arr === undefined){
        return undefined
    }
    let Arr = []
    for(let i = 0;i < arr.length;i++){
        let n = arr[i]
        if(Arr[n]){
            Arr[n]++
        }return Arr[n] = 1       
    }
    return Arr
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))  
