const words = require('../../src/words');

describe('words (ai_generated extra)', () => {
    test('handles emoji sequences', () => {
        expect(words('hello 👋 world')).toEqual(['hello', '👋', 'world']);
    });

    test('handles non-latin scripts', () => {
        expect(words('Привет мир')).toEqual(['Привет', 'мир']);
    });

    test('multiple separators produce correct splits', () => {
        expect(words('a,,b;;;c')).toEqual(['a', 'b', 'c']);
    });
});
