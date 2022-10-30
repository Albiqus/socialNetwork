import {
    MIN_FIRST_NAME_LENGTH,
    MIN_LAST_NAME_LENGTH,
    MIN_PASSWORD_LENGTH,
    REGISTRATION_ERRORS
} from "../../../data/register-data";


const validateFirstName = (firstName) => {
    if (firstName.length === 0) {
        return (REGISTRATION_ERRORS.firstName.empty)
    }
    if (firstName.length < MIN_FIRST_NAME_LENGTH) {
        return (REGISTRATION_ERRORS.firstName.invalidSymbolsAmount)
    }
}
const validateLastName = (lastName) => {
    if (lastName.length === 0) {
        return (REGISTRATION_ERRORS.lastName.empty)
    }
    if (lastName.length < MIN_LAST_NAME_LENGTH) {
        return (REGISTRATION_ERRORS.lastName.invalidSymbolsAmount)
    }
}
const validateEmail = (email) => {
    let emailSymbols = email.split('')
    if (emailSymbols.length === 0) {
        return (REGISTRATION_ERRORS.email.empty)
    }
    if (!emailSymbols.includes('.') || !emailSymbols.includes('@')) {
        return (REGISTRATION_ERRORS.email.invalidFormat)
    }
    let lastEmailSymbol = emailSymbols[email.length - 1]
    if (lastEmailSymbol === '.' || lastEmailSymbol === '@' || lastEmailSymbol === '-' || lastEmailSymbol === '_') {
        return (REGISTRATION_ERRORS.email.invalidFormat)
    }
    if (emailSymbols.filter(symbol => symbol === '@').length > 1) {
        return (REGISTRATION_ERRORS.email.invalidFormat)
    }
}
const validatePassword = (password, secondPassword) => {
    let passwordSymbols = password.split('')
    let numberCounter = 0;
    let letterCounter = 0;
    if (passwordSymbols.length === 0) {
        return (REGISTRATION_ERRORS.password.empty)
    }
    for (let i = 0; i < passwordSymbols.length; i++) {
        if (/^[0-9]$/.test(passwordSymbols[i])) {
            numberCounter++
        }
        if (/^([а-яё]+|[a-z]+)$/i.test(passwordSymbols[i])) {
            letterCounter++
        }
    }
    if (numberCounter === 0) {
        return (REGISTRATION_ERRORS.password.lackOfNumbers)
    }
    if (letterCounter === 0) {
        return (REGISTRATION_ERRORS.password.lackOfLetters)
    }
    if (password.length < MIN_PASSWORD_LENGTH) {
        return (REGISTRATION_ERRORS.password.invalidSymbolsAmount)
    }
    if (password !== secondPassword) {
        return (REGISTRATION_ERRORS.password.differencePasswords)
    }
}

export const validate = (firstName, lastName, email, password, secondPassword) => {
    const firstNameError = validateFirstName(firstName)
    const lastNameError = validateLastName(lastName)
    const emailError = validateEmail(email)
    const passwordError = validatePassword(password, secondPassword)

    let errorStatus = true
    if (!firstNameError && !lastNameError && !emailError && !passwordError) {
        errorStatus = false
    }

    return ({
        firstNameError,
        lastNameError,
        emailError,
        passwordError,
        errorStatus
    })
}