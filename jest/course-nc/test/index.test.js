
const sum = require('../src/index');
//import sum from '../src/index.js'

describe('Test for sum', () => {

    test('1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3)
    })

    /*
    // Alias of test
    it('Should return 3 with 1 + 2', () => {
        expect(sum(1, 2)).toBe(3)
    })
    */

    test('1 + (-2) to equal -1', () => {
        expect(sum(1, -2)).toBe(-1)
    })

    test('-1 + (-2) to equal -3', () => {
        expect(sum(-1, -2)).toBe(-3)
    })

})


