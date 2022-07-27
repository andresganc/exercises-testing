
const sum = require('../src/index');
//import sum from '../src/index.js'

describe('Matchers', () => {

    test('Matcher toBe : 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3)
    })

    test('Matcher toEqual : 1 + 2 to equal 3', () => {

        const data1 = { username: 'Andres Giraldo' }
        const data2 = { username: 'Andres' }
        
        expect(data1).toEqual({ username: 'Andres Giraldo'})
        expect(data1).not.toEqual(data2)
    })
    

})