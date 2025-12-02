const isArrayLike = require('./isArrayLike');

/**
 * Checks if `value` is array-like and an object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like object, else `false`.
 */
function isArrayLikeObject(value) {
    return typeof value === 'object' && value !== null && isArrayLike(value);
}

module.exports = isArrayLikeObject;
