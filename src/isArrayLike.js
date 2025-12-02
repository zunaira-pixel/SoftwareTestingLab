/**
 * Checks if `value` is array-like.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 */
function isArrayLike(value) {
    return value != null &&
        typeof value !== 'function' &&
        typeof value.length === 'number' &&
        value.length >= 0 &&
        value.length <= Number.MAX_SAFE_INTEGER;
}

module.exports = isArrayLike;
