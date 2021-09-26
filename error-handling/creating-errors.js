// Creating Errors
class MyError extends Error {
    constructor(message) {
        super(message)
        this.name = "MyError"
    }
}

const err = new MyError("oops")
console.log(err.name);
console.log(err.message);
console.log(err.stack);

