const isInt = (n: number) => {
    return Number(n) === n && n % 1 === 0
}

export const getFormatedPrice = (value: number) => {
    return isInt(value) ? `${value}.-` : value.toFixed(2)
}

export const CURRENCY: string = 'CHF'
