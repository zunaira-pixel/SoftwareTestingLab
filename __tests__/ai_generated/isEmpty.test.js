const isEmpty = require('../../src/isEmpty');

describe('isEmpty (ai_generated extra)', () => {
    test('functions are not empty', () => {
        expect(isEmpty(() => {})).toBe(false);
    });

    test('array-like objects with length 0 are empty', () => {
        const obj = { length: 0 };
        expect(isEmpty(obj)).toBe(true);
    });

    test('numbers are not empty', () => {
        expect(isEmpty(0)).toBe(false);
        expect(isEmpty(42)).toBe(false);
    });
});
