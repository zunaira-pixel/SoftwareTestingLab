const endsWith = require('../../src/endsWith');

describe('endsWith', () => {
    test('checks if string ends with target', () => {
        expect(endsWith('abc', 'c')).toBe(true);
    });

    test('returns false when string does not end with target', () => {
        expect(endsWith('abc', 'b')).toBe(false);
    });

    test('checks with position parameter', () => {
        expect(endsWith('abc', 'b', 2)).toBe(true);
    });

    test('handles multi-character target', () => {
        expect(endsWith('hello world', 'world')).toBe(true);
    });

    test('returns false for empty string', () => {
        expect(endsWith('', 'a')).toBe(false);
    });
});
