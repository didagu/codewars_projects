function order(words){
    var result = []
    if(words.length == 0) return "";
    words.split(" ").forEach(element => {
        var found = element.match(/[0-9]/g)
        result[found[0]] = element
    });
    return result.join(" ").trim()
}

console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
console.log(order(""), "")