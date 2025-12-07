const upperFirst = require('../../src/upperFirst');

describe('upperFirst (ai_generated extra)', () => {
    test('non-letter first character unchanged', () => {
        expect(upperFirst('1abc')).toBe('1abc');
    });

    test('handles multi-byte characters', () => {
        expect(upperFirst('ßeta')).toBe('ßeta');
    });

    test('preserves rest of string', () => {
        expect(upperFirst('hELLO')).toBe('HELLO');
    });
});
