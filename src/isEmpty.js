/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 */
function isEmpty(value) {
    if (value == null) {
        return true;
    }

    if (Array.isArray(value) || typeof value === 'string' || typeof value.splice === 'function') {
        return value.length === 0;
    }

    if (value instanceof Map || value instanceof Set) {
        return value.size === 0;
    }

    if (typeof value === 'object') {
        return Object.keys(value).length === 0;
    }

    return false;
}

module.exports = isEmpty;
