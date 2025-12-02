const eq = require('../eq');

describe('eq', () => {
    test('compares equal values', () => {
        expect(eq(1, 1)).toBe(true);
    });

    test('compares unequal values', () => {
        expect(eq(1, 2)).toBe(false);
    });

    test('compares NaN values as equal', () => {
        expect(eq(NaN, NaN)).toBe(true);
    });

    test('compares strings', () => {
        expect(eq('a', 'a')).toBe(true);
    });

    test('compares objects', () => {
        const obj = { a: 1 };
        expect(eq(obj, obj)).toBe(true);
        expect(eq({ a: 1 }, { a: 1 })).toBe(false);
    });
});
