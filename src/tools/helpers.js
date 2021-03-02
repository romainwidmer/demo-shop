const isInt = n => {
    return Number(n) === n && n % 1 === 0
}

export const getFormatedPrice = value => {
    return isInt(value) ? `${value}.-` : value.toFixed(2)
}
