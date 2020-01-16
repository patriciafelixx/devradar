module.exports = function parseStringAsArray(stringx) {
    return stringx.split(',').map(tech => tech.trim());
}