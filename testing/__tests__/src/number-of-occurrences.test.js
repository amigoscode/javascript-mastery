import numberOfOccurrences from "./../../src/number-of-occurrences.js";

test('can find number of occurrences', () => {
    // given
    const array = [1, 2, 2, 2, 5];
    const expected = 3;
    // when
    const actual = numberOfOccurrences(array, 2);
    // then
    expect(actual).toBe(expected);
})

test('can find number of occurrences if 0', () => {
    // given
    const array = [1, 2, 2, 2, 5];
    // when
    const actual = numberOfOccurrences(array, 11);
    // then
    expect(actual).toBe(0);
})

test('will throw if input is not a number', () => {
    expect(() => numberOfOccurrences([], "a"))
        .toThrow('a is not a number');
})