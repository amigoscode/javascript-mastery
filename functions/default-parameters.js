// Function Default Parameter
const getBrand = (brand = "Hello", a = {}) => ({
        brand: brand,
        website: `www.${brand.toLowerCase()}.com`
    }
)

const brand = getBrand("Samsung")
console.log(JSON.stringify(brand, null, 1))