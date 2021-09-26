// Spread Operator on Objects
const jamila = {
    firstName: "Jamila",
    age: 21,
    isFemale: true,
    balance: 100.32,
    dob: new Date(2000, 1, 28).toJSON(),
    toString: function() {
        return `Name: ${this.firstName} 
        Age: ${this.age}`
    },
    deleteMe: true
};

const address = {
    city: "London",
    postCode: "SW9"
};

const person = {
   ...jamila,
   address: {...address}
};

console.log(person)
