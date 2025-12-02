/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 */
function isSymbol(value) {
    return typeof value === 'symbol' ||
        (typeof value === 'object' && value !== null &&
            Object.prototype.toString.call(value) === '[object Symbol]');
}

module.exports = isSymbol;
