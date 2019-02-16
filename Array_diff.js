function array_diff(a,b) {
    return a.filter(item => b.indexOf(item) < 0)
}

console.log(array_diff([], [1,2]))