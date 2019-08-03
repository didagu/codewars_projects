const assert = require('chai').assert;
const inArray = require('../whichAreIn');

describe('Test for WhichAreIn solution', () => {
    let a1 = ["xyz", "live", "strong"];
    let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
    let result = inArray(a1, a2);

    it('the following items: "live" and "strong" are in the array', () => {
        assert.deepEqual(["live", "strong"], result);
    })

    it('the array has 2 items', () => {
        assert.equal(2, result.length);
    })
})