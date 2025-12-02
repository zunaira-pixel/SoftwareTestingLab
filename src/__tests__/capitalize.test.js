const capitalize = require('../capitalize');

describe('capitalize', () => {
    test('capitalizes lowercase string', () => {
        expect(capitalize('hello')).toBe('Hello');
    });

    test('capitalizes uppercase string', () => {
        expect(capitalize('HELLO')).toBe('Hello');
    });

    test('handles single character', () => {
        expect(capitalize('a')).toBe('A');
    });

    test('handles empty string', () => {
        expect(capitalize('')).toBe('');
    });

    test('capitalizes mixed case string', () => {
        expect(capitalize('hELLO wORLD')).toBe('Hello world');
    });
});
