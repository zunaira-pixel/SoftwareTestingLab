/**
 * Converts `string` to camel case.
 *
 * @param {string} string The string to convert.
 * @returns {string} Returns the camel cased string.
 */
function camelCase(string) {
    if (!string) return '';

    // Split by non-alphanumeric characters and camelCase boundaries
    const words = string
        // Insert space before uppercase letters that follow lowercase letters or numbers
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        // Insert space between letters and numbers
        .replace(/([a-zA-Z])([0-9])/g, '$1 $2')
        .replace(/([0-9])([a-zA-Z])/g, '$1 $2')
        // Replace all non-alphanumeric characters with spaces
        .replace(/[^a-zA-Z0-9]+/g, ' ')
        // Trim and split into words
        .trim()
        .split(/\s+/)
        .filter(word => word.length > 0);

    if (words.length === 0) return '';

    return words
        .map((word, index) => {
            word = word.toLowerCase();
            return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

module.exports = camelCase;
