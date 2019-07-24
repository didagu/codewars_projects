function oddCount(n){
    let results= []
    for(let i = 0; i < n-1;i++){
        if(i % 2) {
            results.push(i)
        }
    }
    return results.length
}

module.exports = oddCount