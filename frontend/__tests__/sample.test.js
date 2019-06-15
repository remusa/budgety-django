describe('sample test suite', () => {
    it('works as expected', () => {
        expect(1).toEqual(1)

        let age = 100
        expect(age).toEqual(100)
        age += 1
        expect(age).toEqual(101)
    })

    it('handles ranges just fine', () => {
        const age = 200
        expect(age).toBeGreaterThan(100)
    })

    it('makes a list of dog names', () => {
        const dogs = ['snickers', 'hugo']

        expect(dogs).toEqual(dogs)
        expect(dogs).toContain('snickers')
        expect(dogs).toContain('snickers')
    })
})
