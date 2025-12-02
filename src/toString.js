const isSymbol = require('./isSymbol');

/**
 * Converts `value` to a string.
 *
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function toString(value) {
    if (value == null) {
        return '';
    }

    if (typeof value === 'string') {
        return value;
    }

    if (Array.isArray(value)) {
        return value.map(v => toString(v)).join(',');
    }

    if (isSymbol(value)) {
        return value.toString();
    }

    const result = (value + '');
    return (result === '0' && (1 / value) === -Infinity) ? '-0' : result;
}

module.exports = toString;
