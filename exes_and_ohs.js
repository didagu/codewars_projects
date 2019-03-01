function XO(str) {
    var exes = []
    var ohs = []
    str.toLowerCase().split('').forEach((item) => {
        if(item == "x"){
            exes.push(item)
        } else if(item == "o"){
            ohs.push(item)
        }
    })
    return (exes.length == ohs.length)
}

console.log(XO('xo'),true);
console.log(XO("xxOo"),true);
console.log(XO("xxxm"),false);
console.log(XO("Oo"),false);
console.log(XO("ooom"),false);