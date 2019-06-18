function add(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        throw "Numbers only!"
    }
    return a + b
}

function subtract(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        throw "Numbers only!"
    }
    return a - b
}

module.exports = { add, subtract }
