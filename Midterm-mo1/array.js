// 1
let grades = [85, 72, 90, 60, 95, 78];
// Find the highest and lowest grade.
const highest = grades.reduce((acc , curr) => {
    return curr > acc ? curr : acc
})
console.log(highest);

const lowest = grades.reduce((acc , curr) => {
    return curr < acc ? curr : acc
})
console.log(lowest);

// Calculate the average grade.
const sum = grades.reduce((acc , curr) => {
    return curr += acc
})
const avg = sum/grades.length
console.log(avg);

// Create a new array of grades where each grade is increased by 5 (but maximum should be 100).
const upGrades = grades.map(g => Math.min((g + 5) , 100))
console.log(upGrades);

// Filter out all grades less than 70.
const filter = grades.filter(g => g < 70)
console.log(filter);