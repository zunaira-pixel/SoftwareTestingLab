const isSymbol = require('./isSymbol');

/**
 * Converts `value` to a number.
 *
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 */
function toNumber(value) {
    if (typeof value === 'number') {
        return value;
    }

    if (isSymbol(value)) {
        return NaN;
    }

    if (typeof value === 'object' && value !== null) {
        const other = typeof value.valueOf === 'function' ? value.valueOf() : value;
        value = typeof other === 'object' ? (other + '') : other;
    }

    if (typeof value !== 'string') {
        return value === 0 ? value : +value;
    }

    value = value.trim();
    const isBinary = /^0b[01]+$/i.test(value);

    return (isBinary || /^0o[0-7]+$/i.test(value))
        ? parseInt(value.slice(2), isBinary ? 2 : 8)
        : +value;
}

module.exports = toNumber;
