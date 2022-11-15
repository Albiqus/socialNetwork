import {
    MAX_CITY_LENGTH,
    MAX_COUNTRY_LENGTH,
    MAX_EMAIL_LENGTH,
    MAX_FIRST_NAME_LENGTH,
    MAX_LAST_NAME_LENGTH,
    MAX_SECRET_KEY_LENGTH,
    PHONE_LENGTH
}
from "../../data/register-data";

export const format = (value, type) => {
    let formattedValue = '';
    switch (type) {
        case 'first_name':
        case 'last_name':
        case 'country':
        case 'city': {
            let valueLength
            if (type === 'first_name') valueLength = MAX_FIRST_NAME_LENGTH
            if (type === 'last_name') valueLength = MAX_LAST_NAME_LENGTH
            if (type === 'country') valueLength = MAX_COUNTRY_LENGTH
            if (type === 'city') valueLength = MAX_CITY_LENGTH
            for (let i = 0; i < value.length; i++) {
                if (i === valueLength) break
                if (type === 'first_name' && value[i] === '-') break
                if (type === 'last_name' && value[i] === '-') break
                if (value[i - 1] === '-' && value[i] === '-') break
                if (!/^[A-ZА-ЯЁ-]+$|^$/i.test(value[i])) break
                if (i === 0 || value[i - 1] === '-') formattedValue += value[i].toUpperCase()
                if (i !== 0 && value[i - 1] !== '-') formattedValue += value[i].toLowerCase()
            }
            return formattedValue
        }    
            
        case 'email': {
            for (let i = 0; i < value.length; i++) {
                if (i === MAX_EMAIL_LENGTH) break
                if (!/^[A-Z0-9]|[-_.@]+$|^$/i.test(value[i])) continue
                if (i === 0 && /^[-_.@]+$/i.test(value[i])) continue
                if (/^[-_.@]+$/i.test(value[i]) && /^[-_.@]+$/i.test(value[i - 1])) continue
                formattedValue += value[i]
            }
            return formattedValue
        }
            
        case 'phone': {
            for (let i = 0; i < value.length; i++) {
                if (i === PHONE_LENGTH) break
                if (!/^[0-9]|\+$/.test(value[i])) continue
                if (i > 0 && value[i] === '+') continue
                if (i > 0) {
                    formattedValue += value[i]
                    continue
                }
                if (value[i] === '+') formattedValue += value[i]
                if (value[i] === '9') formattedValue += '+79'
                if (value[i] === '8' || value[i] === '7') formattedValue += '+7'
            }
            return formattedValue
        }
            
        case 'secretKey': {
            for (let i = 0; i < value.length; i++) {
                if (i === MAX_SECRET_KEY_LENGTH) break
                if (!/^[A-ZА-ЯЁ]+$|^$/i.test(value[i])) continue
                formattedValue += value[i]
            }
            return formattedValue
        }
        default: break
    }
}