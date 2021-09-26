// Error Object
const json = '{"brand" "Amigoscode"}';

try {
    console.log(brand);
    console.log(JSON.parse(json));
} catch(error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}