function pigIt(str) {
    //Code here
    return str.split(' ').map(element => {
        if(/[a-zA-Z]/.test(element)){
            return (element + '' + element[0] + 'ay').replace(element[0], '')
        } else {
            return element
        }        
    }).join(' ');
}
console.log(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay')
console.log(pigIt('This is my string'), 'hisTay siay ymay tringsay')
console.log(pigIt('Hello World !'), 'elloHay orldway !')