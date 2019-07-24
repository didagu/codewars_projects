const assert = require('chai').assert;
const oddCount = require('../oddCount');

describe("Solution for odd count", function () {
    let result = oddCount(15)

    it('result should be 7', function () {
        assert.equal(result, 7,'These numbers are not equal')
    })
});