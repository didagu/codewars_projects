const duplicates = numbersArray => {
    var counts = {}
    numbersArray.forEach((item) => {
        counts[item] = (counts[item] || 0) +1
    })

    return Object.values(counts).reduce((acc, cur) => {
        return acc + Math.floor(cur / 2)
    }, 0)
}

module.exports = duplicates