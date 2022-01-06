
/* 

toBeGreaterThan()
toBeGreaterThanOrEqual()
toBeLessThan()
toBeLessThanOrEqual()
toBe()
toBeCloseTo()
toEqual()

*/

test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
});


test('Adding floating point number ', () => {

    const value = 0.1 + 0.2

    expect(value).toBeCloseTo(0.3)
})
