// Arrays Destructing
const names = [
    "James",
    "Mariam",
    "Jamal",
    "Aisha",
    "Alex"
];
const [j, mariam, jamal, ...rest] = names;
console.log(j)
console.log(mariam)
console.log(jamal)
console.log(rest)