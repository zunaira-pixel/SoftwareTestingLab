/**
 * Checks if `string` ends with the given target string.
 *
 * @param {string} string The string to inspect.
 * @param {string} target The string to search for.
 * @param {number} [position=string.length] The position to search up to.
 * @returns {boolean} Returns `true` if `string` ends with `target`, else `false`.
 */
function endsWith(string, target, position) {
    if (!string) return false;

    // If a position is provided, clamp it to the string length so that
    // positions larger than the string length are treated as the string end.
    const length = position === undefined ? string.length : Math.min(position, string.length);
    const end = length;
    const start = end - target.length;

    return start >= 0 && string.slice(start, end) === target;
}

module.exports = endsWith;
