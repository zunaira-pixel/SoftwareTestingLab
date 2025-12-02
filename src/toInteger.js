const toFinite = require('./toFinite');

/**
 * Converts `value` to an integer.
 *
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 */
function toInteger(value) {
    const finite = toFinite(value);
    const remainder = finite % 1;

    return remainder ? finite - remainder : finite;
}

module.exports = toInteger;
