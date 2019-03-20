function expandedForm(num) {
    // Your code here
    var res = []
    var numArr = num.toString().split('')
    for(var i = 1; i <= numArr.length ; i++){
        if(numArr[i-1] != 0){
            var exp = numArr.length - i
            var value = Math.pow(10,exp) * numArr[i-1]
            var stringValue = value.toString()
            res.push(stringValue)
        }            
    }
    return res.join(' + ')
}

console.log(expandedForm(12), '10 + 2');
console.log(expandedForm(42), '40 + 2');
console.log(expandedForm(70304), '70000 + 300 + 4');