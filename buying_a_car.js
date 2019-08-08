function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
    //your code here
    let priceOld = startPriceOld
    let priceNew = startPriceNew
    let monthsCount = 0
    let reductionPercentage = percentLossByMonth
    let monthlySavings = 0
    if (startPriceOld >= startPriceNew) {
        return [0, Math.floor(startPriceOld - startPriceNew)]
    }

    while ((monthlySavings + priceOld) < priceNew) {
        monthsCount += 1
        monthlySavings += savingperMonth
        if (monthsCount % 2 === 0) reductionPercentage += 0.5
        priceOld -= priceOld * (reductionPercentage / 100)
        priceNew -= priceNew * (reductionPercentage / 100)
    }

    return [monthsCount, Math.floor(monthlySavings + priceOld - priceNew)]
}

console.log(nbMonths(2000, 8000, 1000, 1.5), [6, 766])
console.log(nbMonths(12000, 8000, 1000, 1.5), [0, 4000])