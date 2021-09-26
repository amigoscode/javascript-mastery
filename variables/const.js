// const
const brand = "Amigoscode";
const brandObject = {};
brandObject["brand"] = brand;
delete brandObject.brand;
// brand = 10;
// brand = function() {
//     return "Hello"
// }
console.log(brand);
console.log(brandObject);

const hello = function() {
    console.log("hello");
}

// hello = 1

hello()