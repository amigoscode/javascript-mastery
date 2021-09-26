import { Person, SoftwareEngineer } from "./classes.js";

const alex = new Person("Alex", "James", "MALE", 25);
const jamila = new Person("Jamila", "Ahmed", "FEMALE", 19);
const bob = new SoftwareEngineer("Bob", "Smith", "MALE", 17, ['JS', 'GoLang'])

// properties
console.log(alex.firstName);
console.log(alex.gender);
console.log(alex.age);
console.log(alex.fullName);

alex.fName = "Alexander"

// behaviours
alex.sleep();
alex.eat();
console.log(alex.toString());

// Inheritance
console.log(bob.firstName);
console.log(bob.gender);
console.log(bob.age);
console.log(bob.fullName);

// behaviours
bob.sleep();
bob.eat();
console.log(bob.toString());
bob.code();