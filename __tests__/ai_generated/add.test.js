const add = require('../../src/add');

describe('add (ai_generated extra)', () => {
    test('string concatenation when a string is provided', () => {
        expect(add('1', 2)).toBe('12');
    });

    test('boolean operands coerce to numbers', () => {
        expect(add(true, 1)).toBe(2);
        expect(add(false, 5)).toBe(5);
    });

    test('missing second argument yields NaN', () => {
        expect(Number.isNaN(add(1))).toBe(true);
    });
});
