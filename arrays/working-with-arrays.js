// Arrays
const numbers = [1, 2, 3, 4 , 5];

numbers.forEach(number => console.log(number))

console.log(numbers[3])
numbers[3] = 44
console.log(numbers[3])
numbers.push(60)
console.log(numbers)

const indexOfFive = numbers.indexOf(5)
console.log(indexOfFive)

numbers.splice(indexOfFive, 1)
console.log(numbers)