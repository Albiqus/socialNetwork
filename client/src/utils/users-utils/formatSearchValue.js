export const formatSearchValue = (value) => {
    if(!value) return
    const words = value.split(' ').filter(word => word !== '')
    
    let firstWord = `${words[0].split('')[0].toUpperCase()}${words[0].substring(1)}`
    let secondWord
    if (words.length > 1) {
         secondWord = `${words[1].split('')[0].toUpperCase()}${words[1].substring(1)}`
    }
    
    if (words.length === 1) return firstWord
    if (words.length > 1) return `${firstWord} ${secondWord}`
}