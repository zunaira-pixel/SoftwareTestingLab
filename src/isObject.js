/**
 * Checks if `value` is the language type of `Object`.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 */
function isObject(value) {
    const type = typeof value;
    return value != null && (type === 'object' || type === 'function');
}

module.exports = isObject;
