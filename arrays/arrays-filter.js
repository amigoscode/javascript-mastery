// Arrays Filter
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers
    .filter(function(n) {
        return n % 2 === 0
    });

const oddNumbers = numbers
    .filter(n => n % 2 !== 0);

console.log(evenNumbers);
console.log(oddNumbers);