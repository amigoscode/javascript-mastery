import add from './../../src/math'

test('can add numbers', () => {
    // given
    const number1 = 1;
    const number2 = 1;
    
    const expected = 2;
    
    // when
    const actual = add(number1, number2);
    
    // then
    expect(actual).toBe(expected)
});