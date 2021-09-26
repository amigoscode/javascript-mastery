// Generators
const generator = function*() {
    yield 1;
    yield "Amigoscode";
    yield {name: 'Alex', gender: 'MALE'};
}

console.log(generator)
const gen = generator();
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

// let result = gen.next();

// while(!result.done) {
//     console.log(result.value)
//     result = gen.next()
// }