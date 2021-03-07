export const formatNumber = (number) => {
    return typeof number === 'number' ? number.toLocaleString('en-US') : number
}
