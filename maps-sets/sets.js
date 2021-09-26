// Sets
const numbersArray = [1, 1, 2, 2, 3];
console.log(numbersArray)

const numbersSet = new Set();
numbersSet.add(1).add(1).add(2).add(2).add(3)

console.log(numbersSet)
console.log(numbersSet.delete(3))
console.log(numbersSet.delete(6))
console.log(numbersSet)
console.log(numbersSet.has(2))
console.log(numbersSet.has(6))
console.log(numbersSet.size)
// numbersSet.clear()
// console.log(numbersSet.size)
for (const e of numbersSet) {
    console.log(e)
}
numbersSet.forEach(e => console.log(e))

console.log(Array.from(new Set(numbersArray)))
