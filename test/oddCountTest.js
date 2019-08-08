const assert = require('chai').assert;
const oddCount = require('../oddCount');

describe("Solution for odd count", function () {
    let result = oddCount(2296622992028454)

    it('result should be 1148311496014227', function () {
        assert.equal(result, 1148311496014227, 'These numbers are not equal')
    })
});