function printerError(s) {
    // your code
    let count = 0
    let string_letters = s.split("")
    string_letters.forEach(element => {
        if(element > "m"){
            count +=1
        }
    });
    return `${count}/${s.length}`
}

//using Regex
// function printerError(s){
//     return s.match(/[^a-m]/g).length+"/"+s.length
// }
console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"), "3/56")