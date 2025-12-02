/**
 * Checks if `value` is classified as a `Date` object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
 */
function isDate(value) {
    return value instanceof Date ||
        Object.prototype.toString.call(value) === '[object Date]';
}

module.exports = isDate;
