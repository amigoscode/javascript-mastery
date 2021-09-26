// Object Destructuring
const person = {
    firstName: "Jamila",
    age: 21,
    isFemale: true,
    balance: 100.32,
    dob: new Date(2000, 1, 28).toJSON(),
    address: {
        city: "London",
        postCode: "SW9"
    },
    toString: function() {
        return `Name: ${this.firstName} 
        Age: ${this.age}`
    },
    deleteMe: true
};

// const firstName = person.firstName;
// const age = person.age;
// const balance = person.balance;

const { 
    firstName,
    firstName: name,
    age,
    balance,  
    address : { city: town }
} = person;

console.log(firstName);
console.log(name);
console.log(age);
console.log(balance);
console.log(town);
