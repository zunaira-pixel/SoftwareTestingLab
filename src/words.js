/**
 * Splits `string` into an array of its words.
 *
 * @param {string} string The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @returns {Array} Returns the words of `string`.
 */
function words(string, pattern) {
    if (!string) return [];

    if (pattern) {
        return string.match(pattern) || [];
    }

    return string.match(/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g) || [];
}

module.exports = words;
