// Lexical this
const person = {
    firstName: "Jamila",
    cars: ["Tesla", "Ferrari"],
    toString() {
        console.log(`Name: ${this.firstName}`)
        this.cars.forEach(car => {
            console.log(`Name: ${this.firstName} drives ${car}`)
        })
    },
    deleteMe: true
};

person.toString()