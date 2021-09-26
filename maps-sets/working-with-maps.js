const map = new Map();
map
    .set('name', "James")
    .set('age', 22)
    .set('delete', true)

console.log(map)
console.log(map.size)
console.log(map.has('name'))
console.log(map.has('foo'))
console.log(map.get('name'))
console.log(map.delete('delete'))
console.log(Object.fromEntries(map.entries()))
console.log(map.size)
map.clear()
console.log(map.size)





