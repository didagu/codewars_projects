const assert = require('chai').assert;
const duplicates = require('../duplicates');

describe('Solution:duplicates', () => {
    it('result should be 2', () => {
        assert.equal(duplicates([1, 2, 5, 6, 5, 2]), 2)
    })

    it('result should be 4', () => {
        assert.equal(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]), 4)
    })    

    it('result should be 1', () => {
        assert.equal(duplicates([1000, 1000]), 1)
    })

    it('result should be 0', () => {
        assert.equal(duplicates([54]), 0)
    })

    it('result should be 0 for empty arrays', () => {
        assert.equal(duplicates([]), 0)
    })
})