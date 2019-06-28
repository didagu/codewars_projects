const enough = (cap, on, wait) => {
    var a = wait + on - cap
    return a > 0 ? a : 0
}

module.exports = enough