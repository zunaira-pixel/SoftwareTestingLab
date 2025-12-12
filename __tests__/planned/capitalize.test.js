const capitalize = require('../../src/capitalize');

describe('capitalize', () => {
    test('basic lowercase word', () => {
        expect(capitalize('hello')).toBe('Hello');
    });

    test('already capitalized word', () => {
        expect(capitalize('Hello')).toBe('Hello');
    });

    test('all uppercase input', () => {
        expect(capitalize('WORLD')).toBe('World');
    });

    test('multiple words only first word capitalized and rest lowercased', () => {
        expect(capitalize('hELLo WORLD')).toBe('Hello world');
    });

    test('preserves whitespace around string', () => {
        expect(capitalize('  lead')).toBe('  lead'.charAt(0).toUpperCase() + '  lead'.slice(1).toLowerCase());
    });

    test('numbers converted to string and returned', () => {
        expect(capitalize(123)).toBe('123');
    });

    test('null or undefined returns empty string', () => {
        expect(capitalize(null)).toBe('');
        expect(capitalize(undefined)).toBe('');
    });
});
