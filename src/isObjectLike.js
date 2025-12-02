/**
 * Checks if `value` is object-like.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
    return typeof value === 'object' && value !== null;
}

module.exports = isObjectLike;
