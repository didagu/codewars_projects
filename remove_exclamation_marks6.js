function remove(s, n) {
    //coding and coding....
    let letters = s.split('')
    for (let index = 0; index < letters.length; index++) {
        if (n > 0 && letters[index] === '!') {
            letters.splice(index,1)
            index--
            n--
        }        
    }
    return letters.join('')
}

console.log(remove("Hi!!!", 1), "Hi!!")
console.log(remove("Hi!", 100), "Hi")
console.log(remove("Hi!!!", 1), "Hi!!")
console.log(remove("Hi!!!", 100), "Hi")
console.log(remove("!Hi", 1), "Hi")
console.log(remove("!Hi!", 1), "Hi!")
console.log(remove("!Hi!", 100), "Hi")
console.log(remove("!!!Hi !!hi!!! !hi", 1), "!!Hi !!hi!!! !hi")
console.log(remove("!!!Hi !!hi!!! !hi", 3), "Hi !!hi!!! !hi")
console.log(remove("!!!Hi !!hi!!! !hi", 5), "Hi hi!!! !hi")
console.log(remove("!!!Hi !!hi!!! !hi", 100), "Hi hi hi")