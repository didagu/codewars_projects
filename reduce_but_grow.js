function grow(x) {
    return x.reduce((acc, cur) => acc * cur)
}

console.log(grow([2,3,4]),24)