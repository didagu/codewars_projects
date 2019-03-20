// Unfinished

function f(x) {
    var r
    //Using Taylor's series to approzimate sqrt(1 + x)
    r = (x * 0.5) - (Math.pow(x, 2) * 0.125) + (Math.pow(x,3) * (1/16))

    // for(var i = 3 ; i < 15 ; i ++){
    //     s += Math.pow(x,i) * Math.pow(-1, i-1) * (fact((2 * i) - 3)/(fact(i) * fact(i - 2) * Math.pow(2,(2 * i) - 2)))
    // }

    return r
}

function fact(x){
    if(x == 0 || x == 1){
        return 1
    }
    return fact(x - 1) * x
}

console.log(f(1.7e-15), 8.499999999999996e-16)
console.log(f(2.1e-07), 1.0499999448750058e-07)
console.log(f(2.8e-13), 1.3999999999999021e-13)
console.log(f(4.6e-16), 2.3e-16)