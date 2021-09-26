// Classes
class Person {

    constructor(firstName, lastName, gender, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }

    sleep() {
        console.log(`${this.firstName} is sleeping`);
    }

    eat() {
        console.log(`${this.firstName} is eating`);
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    set fName(fName) {
        this.firstName = fName;
    }

    toString() {
        return `FistName: ${this.firstName} LastName: ${this.lastName} Gender: ${this.gender} Age: ${this.age}`
    }

}

class SoftwareEngineer extends Person {
    constructor(firstName, lastName, gender, age, programmingLanguages) {
        super(firstName, lastName, gender, age);
        this.programmingLanguages = programmingLanguages;
    }

    code() {
        console.log(`${this.fullName} is coding using ${this.programmingLanguages}`)
    }
}

export {
    Person,
    SoftwareEngineer
}    