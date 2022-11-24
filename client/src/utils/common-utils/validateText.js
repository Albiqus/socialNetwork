export const validateText = (text) => {
    if (text.split('').find(symbol => symbol !== ' ')) return text
    else return ''
}