function duplicateCount(text) {
    //...
    var charCount = {}
    text.toLowerCase().split('').sort().forEach((item) =>{
        charCount[item] = charCount[item] + 1 || 1
    })
    return Object.keys(charCount).filter((item) => {
        return charCount[item] > 1
    }).length
}

console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2, "should ignore case");
console.log(duplicateCount("Indivisibility"), 1)
console.log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")