const defaultTo = require('../defaultTo');

describe('defaultTo', () => {
    test('returns value when defined', () => {
        expect(defaultTo(1, 10)).toBe(1);
    });

    test('returns default for null', () => {
        expect(defaultTo(null, 10)).toBe(10);
    });

    test('returns default for undefined', () => {
        expect(defaultTo(undefined, 10)).toBe(10);
    });

    test('returns default for NaN', () => {
        expect(defaultTo(NaN, 10)).toBe(10);
    });

    test('returns 0 when value is 0', () => {
        expect(defaultTo(0, 10)).toBe(0);
    });

    test('returns empty string when value is empty string', () => {
        expect(defaultTo('', 'default')).toBe('');
    });
});
