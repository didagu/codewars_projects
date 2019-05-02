function inArray(array1, array2) {
    //...
    let set= new Set()
    array2.forEach(element => {
        array1.forEach((item) => {
            if ( element.includes(item) ) 
                set.add(item)
        })
    });
    return Array.from(set).sort()
}

function inArray(array1,array2) {
    return array1.filter((item) => {
        return array2.some((e) => e.includes(item))
    }).sort()
}

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

a1 = ["xyz", "live", "strong"]
console.log(inArray(a1, a2), ["live", "strong"])
a1 = ["live", "strong", "arp"]
console.log(inArray(a1, a2), ["arp", "live", "strong"])
a1 = ["tarp", "mice", "bull"]
console.log(inArray(a1, a2), [])