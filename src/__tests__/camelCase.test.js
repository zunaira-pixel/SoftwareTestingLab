const camelCase = require('../camelCase');

describe('camelCase', () => {
    test('converts space-separated words', () => {
        expect(camelCase('Foo Bar')).toBe('fooBar');
    });

    test('converts hyphen-separated words', () => {
        expect(camelCase('--foo-bar--')).toBe('fooBar');
    });

    test('converts underscore-separated words', () => {
        expect(camelCase('__FOO_BAR__')).toBe('fooBar');
    });

    test('handles already camelCase strings', () => {
        expect(camelCase('fooBar')).toBe('fooBar');
    });

    test('handles empty string', () => {
        expect(camelCase('')).toBe('');
    });

    test('handles strings with numbers', () => {
        expect(camelCase('foo2bar')).toBe('foo2Bar');
    });
});
