function sumStrings(a,b){
    let arr_a = readNumberFromString(a)
    let arr_b = readNumberFromString(b)

    let result = []
    let carry = 0
    let i = 0

    if(arr_a.length > arr_b.length){
        return sumStrings(b,a)
    }

    for(i  = 0 ; i < a.length ; i ++){
        let temp = arr_a[i] + arr_b[i] + carry
        result[i] = temp % 10
        carry = (temp > 9 ? 1 : 0 )
    }

    while ( i < b.length ) {
        let temp = arr_b[i] + carry
        result[i] = temp % 10
        carry = (temp > 9 ? 1 : 0)
        i++
    }

    if(carry == 1){
        result[i] = 1
    }

    return result.reverse().join('').replace(/^0+/,'')
}

function readNumberFromString(string){
    return string.split("").map(Number).reverse()
}

//Someone else solution
function sumStrings(a, b) {
    var res = '', c = 0;
    a = a.split('');
    b = b.split('');
    while (a.length || b.length || c) {
        c += ~~a.pop() + ~~b.pop();
        res = c % 10 + res;
        c = c > 9;
    }
    return res.replace(/^0+/, '');
}

console.log(sumStrings('123', '456'), '579')
console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'), '712577413488402631964821329')