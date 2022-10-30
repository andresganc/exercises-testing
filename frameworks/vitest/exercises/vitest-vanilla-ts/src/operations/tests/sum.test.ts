

import { describe, it, expect } from 'vitest'
import sum from '../sum'


describe('#sum', () => {
    
    it('Returns 0 with no numbers', () => {
        expect(sum()).toBe(0)
    })

    it('Return same number with one number', () => {
        expect(sum(2)).toBe(2)
    })

    it('Return sum with multiple numbers', () => {
        expect(sum(1, 2, 3)).toBe(6)
    })

})

