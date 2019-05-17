const assert = require('chai').assert;
const getEvenNumbers = require('../getEvenNumbers');

describe("Solution", function () {
    let result = getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9])
    
    it('result should be an array', function() {        
        assert.isArray(result)
    })

    it('each element of the array should be even number', function() {
        result.forEach(element => {
            assert.isTrue(element % 2 === 0 , 'element is even number')
        });
    })
});