/**
 * Checks if `value` is a valid array-like length.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
    return typeof value === 'number' &&
        value >= 0 &&
        value <= Number.MAX_SAFE_INTEGER &&
        value === Math.floor(value);
}

module.exports = isLength;
