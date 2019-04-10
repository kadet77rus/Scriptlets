/**
 * Escapes special chars in string
 * @param {string} str
 * @returns {string}
 */
export const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * Converts search string to the regexp
 * TODO think about nested dependecies, but be carefull with dependency loops
 * @param {string} str search string
 * @returns {RegExp}
 */
export const toRegExp = (str) => {
    if (str[0] === '/' && str[str.length - 1] === '/') {
        return new RegExp(str.slice(1, -1));
    }
    const escaped = str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(escaped);
};

/**
 * Converts string to function
 * @param {string} str string should be turned into function
 */
// eslint-disable-next-line arrow-body-style
export const stringToFunc = (str) => {
    // eslint-disable-next-line no-new-func
    return str ? new Function(str) : () => {};
};
