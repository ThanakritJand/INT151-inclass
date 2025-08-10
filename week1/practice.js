function countVowels(word){
    if(word === undefined || word === null || typeof word !== 'string') return 0

    let char = word.split("")
    let vowel = /^[aeiouAEIOU]$/;
    let count = 0
    for(let i = 0;i < char.length;i++){
        if(vowel.test(char[i])){
            count ++
        }
    }
    console.log(count)
}

function reverseWords(sentence){
    if(sentence === undefined || sentence === null || typeof sentence !== 'string') return ""
    if(!sentence.trim()) return ""

    let word = sentence.split(" ")
    let reverse = "" 

    for(let i = word.length - 1; i >= 0; i--){
        reverse += word[i] + ' '
    }

    return reverse
}

function sumNumbers(sentence){
    if(sentence === undefined || sentence === null || typeof sentence !== 'string') return 0
    if(!sentence.trim()) return 0

    const numbers = sentence.match(/-?\d+(\.\d+)?/g);
    let sum = 0

    for(let i = 0;i < numbers.length;i++){
        sum += Number(numbers[i])
    }

    return sum
}

console.log(sumNumbers("I have 2 apples and 3 oranges"));
