const ceil = require('../../src/ceil');

describe('ceil (ai_generated extra)', () => {
    test('handles floating precision rounding issues', () => {
        expect(ceil(1.005, 2)).toBe(1.01);
    });

    test('handles very large precision', () => {
        expect(ceil(12345.6789, -3)).toBe(13000);
    });

    test('precision default when omitted', () => {
        expect(ceil(2.1)).toBe(3);
    });
});
