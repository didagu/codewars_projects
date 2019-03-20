function expandedForm(number) {
    // Your code here
    var result = []
    var numberArray = number.toString().split('')
    for(var i = 1; i <= numberArray.length ; i++){
        if(numberArray[i-1] != 0){
            var exponent = numberArray.length - i
            var value = Math.pow(10,exponent) * numberArray[i-1]
            var stringValue = value.toString()
            result.push(stringValue)
        }            
    }
    return result.join(' + ')
}

console.log(expandedForm(12), '10 + 2');
console.log(expandedForm(42), '40 + 2');
console.log(expandedForm(70304), '70000 + 300 + 4');