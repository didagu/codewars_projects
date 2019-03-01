console.time('scramblies')
function scramble(str1, str2) {
    //code me
    one = str1.replace(/\s/g,'').split('').sort()
    two = str2.replace(/\s/g, '').split('').sort()
    return two.every(e => one.indexOf(e) > -1)
}

console.timeEnd('scramblies')

console.log(scramble('rkqodlw','wor ld'),true)
console.log(scramble('cedewaraaossoqqyt', 'codewars'),true)
console.log(scramble('katas', 'steak'),false)
console.log(scramble('scriptjava', 'javascript'),true)
console.log(scramble('scriptingjava', 'javascript'),true)
console.log(scramble('scriptsjava', 'javascripts'),true)
console.log(scramble('jscripts', 'javascript'),false)
console.log(scramble('aabbcamaomsccdd', 'commas'),true)
