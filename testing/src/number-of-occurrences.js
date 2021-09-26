const numberOfOccurrences = (arr, n) => {
    if (isNaN(n)) {
        throw new Error(`${n} is not a number`)
    }
    let count = 0;
    for (const num of arr) {
        if (num === n) count++;
    }
    return count;
}
export default numberOfOccurrences;
