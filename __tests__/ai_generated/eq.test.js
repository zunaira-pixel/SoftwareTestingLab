const eq = require('../../src/eq');

describe('eq (ai_generated extra)', () => {
    test('distinguishes +0 and -0 as equal in SameValueZero', () => {
        expect(eq(+0, -0)).toBe(true);
    });

    test('different types are not equal', () => {
        expect(eq('1', 1)).toBe(false);
        expect(eq(true, 1)).toBe(false);
    });

    test('object vs null', () => {
        expect(eq({}, null)).toBe(false);
    });
});
