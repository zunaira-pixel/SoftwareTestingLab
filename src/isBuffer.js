/**
 * Checks if `value` is a buffer.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 */
function isBuffer(value) {
    return typeof Buffer !== 'undefined' &&
        Buffer.isBuffer &&
        Buffer.isBuffer(value);
}

module.exports = isBuffer;
