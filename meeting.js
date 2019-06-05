function meeting(s) {
    let str = s.toUpperCase()
                .split(";")
                .map((item) => {
                    return item.split(':').reverse().join(', ')
                })
                .sort()
                .join(')(')
    return `(${str})`
}


module.exports = meeting;