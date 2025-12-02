const words = require('../src/words');

describe('words', () => {
    test('splits string into words', () => {
        expect(words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles']);
    });

    test('handles camelCase', () => {
        expect(words('fooBarBaz')).toEqual(['fooBarBaz']);
    });

    test('splits with custom pattern', () => {
        expect(words('fred, barney, & pebbles', /[^, ]+/g)).toEqual(['fred', 'barney', '&', 'pebbles']);
    });

    test('returns empty array for empty string', () => {
        expect(words('')).toEqual([]);
    });

    test('handles strings with numbers', () => {
        expect(words('foo123bar')).toEqual(['foo123bar']);
    });
});
