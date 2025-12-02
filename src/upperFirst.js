/**
 * Converts the first character of `string` to upper case.
 *
 * @param {string} string The string to convert.
 * @returns {string} Returns the converted string.
 */
function upperFirst(string) {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = upperFirst;
