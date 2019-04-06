function race(v1, v2, g) {
    // your code
    if (v1 >= v2) return null
    var t = g / (v2 - v1)
    var hours = (Math.floor(t*1))%60
    var minutes = (Math.floor(t*60))%60
    var seconds = (Math.floor(t*3600))%60
    return [hours, minutes, seconds]
}

console.log(race(720, 850, 70), [0, 32, 18])
console.log(race(80, 91, 37), [3, 21, 49])
console.log(race(80, 100, 40), [2, 0, 0])