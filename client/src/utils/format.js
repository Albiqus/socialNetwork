import {
    MAX_CITY_LENGTH,
    MAX_COUNTRY_LENGTH,
    MAX_EMAIL_LENGTH,
    MAX_FIRST_NAME_LENGTH,
    MAX_LAST_NAME_LENGTH,
    PHONE_LENGTH
} from "../data/data";



export const format = (value, type) => {
    let formattedValue = '';
    switch (type) {
        case 'first_name':
        case 'last_name':
        case 'country':
        case 'city': {
            let stringLength
            if (type === 'first_name') {
                stringLength = MAX_FIRST_NAME_LENGTH
            }
            if (type === 'last_name') {
                stringLength = MAX_LAST_NAME_LENGTH
            }
            if (type === 'country') {
                stringLength = MAX_COUNTRY_LENGTH
            }
             if (type === 'city') {
                 stringLength = MAX_CITY_LENGTH
             }
            for (let i = 0; i < value.length; i++) {
                if (/^[A-ZА-ЯЁ]+$|^$/i.test(value[i])) {
                    i === 0 ? formattedValue += value[i].toUpperCase() : formattedValue += value[i].toLowerCase()
                }
                if (i === stringLength - 1) {
                    break
                }
            }
            return formattedValue
        }
        case 'email': {
            for (let i = 0; i < value.length; i++) {
                if (i === MAX_EMAIL_LENGTH) {
                    break
                }
                if (!/^[A-Z0-9]|[-_.@]+$|^$/i.test(value[i])) {
                    continue
                }
                if (i === 0 && /^[-_.@]+$/i.test(value[i])) {
                    continue
                }
                if (/^[-_.@]+$/i.test(value[i]) && /^[-_.@]+$/i.test(value[i - 1])) {
                    continue
                }
                formattedValue += value[i]
            }
            return formattedValue
        }
        case 'phone': {
            for (let i = 0; i < value.length; i++) {
                if (i === PHONE_LENGTH) {
                    break
                }
                if (!/^[0-9]|\+$/.test(value[i])) {
                    continue
                }
                if (i > 0 && value[i] === '+') {
                    continue
                }
                if (i > 0) {
                    formattedValue += value[i]
                    continue
                }
                if (value[i] === '+') {
                    formattedValue += value[i]
                }
                if (value[i] === '9') {
                    formattedValue += '+79'
                }
                if (value[i] === '8' || value[i] === '7') {
                    formattedValue += '+7'
                }
            }
            return formattedValue
        }
        default:
    }
}