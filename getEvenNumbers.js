function getEvenNumbers(numbersArray) {
    // filter out the odd numbers
    return numbersArray.filter(item => item % 2 === 0)
}

module.exports = getEvenNumbers;