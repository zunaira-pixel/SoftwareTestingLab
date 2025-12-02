/**
 * Checks `value` to determine whether a default value should be returned.
 *
 * @param {*} value The value to check.
 * @param {*} defaultValue The default value.
 * @returns {*} Returns `value` or `defaultValue`.
 */
function defaultTo(value, defaultValue) {
    return (value == null || value !== value) ? defaultValue : value;
}

module.exports = defaultTo;
