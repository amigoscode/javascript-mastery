// Functions
const getBrand = function(brand) {
    return {
        brand: brand,
        website: `www.${brand}.com`
    }
}

const brand = getBrand("Nike")
console.log(JSON.stringify(brand, null, 1))