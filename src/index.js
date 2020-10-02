module.exports = function reverse (n) {
    return Number.parseInt(n.toString().split('').reverse().join(''));
}
