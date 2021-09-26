const map = new Map();
map
    .set('name', "James")
    .set('age', 22)
    .set('delete', true)

console.log(map.keys())
for (const k of map.keys()) {
    console.log(k)
}

console.log(map.values())
for (const v of map.values()) {
    console.log(v)
}

console.log(map.entries())
for (const entry of map) {
    console.log(entry)
    console.log(entry[0])
    console.log(entry[1])
}




