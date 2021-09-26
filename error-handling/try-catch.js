// Try catch finally
const json = '{"brand": "Amigoscode"}';

try {
    console.log(JSON.parse(json));
} catch(error) {
    console.log(`oops cannot parse json: ${json}`);
    console.log(error);
} finally {
    console.log("finally was invoked")
}