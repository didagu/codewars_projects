function isPangram(string) {
    //...
    var alphabets = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'x',
        'y',
        'z'
    ]
    string.split(' ').forEach((word) => {
        if(/[a-zA-Z]/.test(word)){
            word.split('').forEach((letter) => {
                var index = alphabets.indexOf(letter.toLowerCase())
                if(index > -1){
                    alphabets.splice(index,1)
                }
            })
        }
    })
    return (alphabets.length == 0)
}



console.log(isPangram("The quick brown fox jumps over the lazy dog."), true)
console.log(isPangram("Is 'AbCdEfGhIjKlM zYxWvUtSrQpOn' a pangram ?"), true)