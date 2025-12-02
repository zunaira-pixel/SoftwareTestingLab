const upperFirst = require('../src/upperFirst');

describe('upperFirst', () => {
    test('uppercases first character', () => {
        expect(upperFirst('hello')).toBe('Hello');
    });

    test('handles already uppercase first character', () => {
        expect(upperFirst('Hello')).toBe('Hello');
    });

    test('handles single character', () => {
        expect(upperFirst('a')).toBe('A');
    });

    test('returns empty string for empty input', () => {
        expect(upperFirst('')).toBe('');
    });

    test('only uppercases first character', () => {
        expect(upperFirst('HELLO')).toBe('HELLO');
    });
});
