const endsWith = require('../../src/endsWith');

describe('endsWith (ai_generated extra)', () => {
    test('handles unicode characters', () => {
        expect(endsWith('naïve', 'ïve')).toBe(true);
    });

    test('long target longer than string returns false', () => {
        expect(endsWith('short', 'a very long target')).toBe(false);
    });

    test('position larger than string length works', () => {
        expect(endsWith('foobar', 'bar', 100)).toBe(true);
    });
});
