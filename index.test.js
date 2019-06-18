const {
    add, subtract
} = require('./index')
// const assert = require('assert')

describe("add()", () => {
    // Test numeric params
    test('Test 1: add(2,5) is equal to 7', () => {
        expect(add(2, 5)).toBe(7)
    })

    // Test string param
    test("Test 2: add('fsddsf', 5) throws an exception", () => {
        expect(() => { add('fsddsf', 5) }).toThrow()
    })
})

describe("subtract()", () => {
    test("subtract(6,7) equals -1", () => {
        expect(subtract(6,7)).toBe(-1)
    })
    test("Test 2: subtract('fsddsf', 5) throws an exception", () => {
        expect(() => {
            subtract('fsddsf', 5)
        }).toThrow()
    })
})