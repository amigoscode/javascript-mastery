// Functions
const getBrand = brand => ({
        brand: brand,
        website: `www.${brand.toLowerCase()}.com`
    }
)

const add = (a, b) => a + b;

const calculate = (a, b, sign) => {
    switch(sign) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        default:
            // throw error

    }
}

const brand = getBrand("Amigoscode")
console.log(JSON.stringify(brand, null, 1))