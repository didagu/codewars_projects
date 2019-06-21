function balance(book) {
    // your code
    // Please use .toFixed(2) to format numbers
    var splitted = book.split('\n').filter(elem => elem != '')
    var originalBalance = parseFloat(clean(splitted.shift()).trim()).toFixed(2)
    var finalBalance = originalBalance, totalExpense = 0.00, averageExpense

    splitted.forEach((elem, index) => {
        var tempArray = clean(elem).split(' ')
        var currentExpense = tempArray[2]
        finalBalance = finalBalance - currentExpense
        totalExpense = originalBalance - finalBalance
        tempArray[2] = parseFloat(tempArray[2]).toFixed(2)
        tempArray.push(`Balance ${finalBalance.toFixed(2)}`)

        return splitted[index] = tempArray.join(' ')
    });

    totalExpense = parseFloat(totalExpense).toFixed(2)
    averageExpense = ( totalExpense / splitted.length ).toFixed(2)

    var result = `Original Balance: ${originalBalance}\r\n${splitted.join('\r\n')}\r\nTotal expense  ${totalExpense}\r\nAverage expense  ${averageExpense}`

    return result
}

function clean(str) {
    return str.replace(/[^a-zA-Z0-9.\s]/gi, "");
}

var b1 = `1000.00!=

125 Market !=:125.45
126 Hardware =34.95
127 Video! 7.45
128 Book :14.32
129 Gasoline ::16.10
`
var b2 = `1233.00
125 Hardware;! 24.8?;
123 Flowers 93.5
127 Meat 120.90
120 Picture 34.00
124 Gasoline 11.00
123 Photos;! 71.4?;
122 Picture 93.5
132 Tyres;! 19.00,?;
129 Stamps 13.6
129 Fruits{} 17.6
129 Market;! 128.00?;
121 Gasoline;! 13.6?;`

balance(b1)
balance(b2)

module.exports = balance;