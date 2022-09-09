const { expect } = require('expect')
const binarySearch = require('./binarySearch')

test('Performs unit testing on binary search algorithm', () => {
    expect(
        binarySearch([1,2,3,4], 5)  // Element out of scope on right
    ).toBe(-1)

    expect(
        binarySearch([2,3,4,5], 1)  // Element out of scope on left
    ).toBe(-1)

    expect(
        binarySearch([1,2,3,4,5], 1) // Element on left of mid
    ).toBe(1)

    expect(
        binarySearch([1,2,3,4,5], 3) // Element on mid
    ).toBe(3)

    expect(
        binarySearch([1,2,3,4,5], 5) // Element on right of mid
    ).toBe(5)

    expect(
        binarySearch([5,1,3,2,4], 4) // Element search in unsorted array
    ).toBe(4)
})