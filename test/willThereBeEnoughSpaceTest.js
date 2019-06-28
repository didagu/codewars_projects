const assert = require('chai').assert;
const enough = require('../will_there_be_enough_space');

describe("Solution: Will there be enough space", function () {
    it('result should be 0', function () {
        var result = enough(10, 5, 5)
        assert.equal(result, 0)
    })

    it('result should be 10', function () {
        var result = enough(100, 60, 50)
        assert.equal(result, 10)
    })
});