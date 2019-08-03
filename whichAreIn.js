function inArray(array1, array2) {
    const result = [];
    array1.forEach((item) => {
        array2.forEach((elem) => {
            if (elem.includes(item)) {
                result.push(item)
            }
        })
    });
    return [...new Set(result.sort())];
}

module.exports = inArray;