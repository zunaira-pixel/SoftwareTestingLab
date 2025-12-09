/**
 * Converts the first character of `string` to upper case.
 *
 * @param {string} string The string to convert.
 * @returns {string} Returns the converted string.
 */
function upperFirst(string) {
    if (!string) return '';
    const first = string.charAt(0);
    const upperFirstChar = first.toUpperCase();

    // If uppercasing the first character expands into multiple characters
    // (for example 'ß' -> 'SS'), avoid changing the string to prevent
    // unexpected length/encoding differences and preserve original behavior.
    if (upperFirstChar.length > first.length) {
        return string;
    }

    return upperFirstChar + string.slice(1);
}

module.exports = upperFirst;
