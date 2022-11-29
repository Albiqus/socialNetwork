import {
    REGISTRATION_ERRORS
} from "../../data/errors"
import {
    MIN_PASSWORD_LENGTH,
    MIN_SECRET_KEY_LENGTH
} from "../../data/lengths"

const validateEmail = (email) => {
    let emailSymbols = email.split('')
    if (emailSymbols.length === 0) {
        return false
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
    if (password.length === 0 && secondPassword.length === 0) {
        return false
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
        return REGISTRATION_ERRORS.password.lackOfNumbers
    }
    if (letterCounter === 0) {
        return REGISTRATION_ERRORS.password.lackOfLetters
    }
    if (password.length < MIN_PASSWORD_LENGTH) {
        return REGISTRATION_ERRORS.password.invalidSymbolsAmount
    }
    if (password !== secondPassword) {
        return REGISTRATION_ERRORS.password.differencePasswords
    }
}

const validateSecretKey = (secretKey, secondSecretKey) => {
    if (secretKey.length === 0 && secondSecretKey.length === 0) {
        return false
    }
    if (secretKey.length < MIN_SECRET_KEY_LENGTH) {
        return REGISTRATION_ERRORS.secretKey.invalidSymbolsAmount
    }
    if (secretKey !== secondSecretKey) {
        return REGISTRATION_ERRORS.secretKey.differenceSecretKeys
    }

}

export const validate = (email, password, secondPassword, secretKey, secondSecretKey) => {
    const emailError = validateEmail(email)
    const passwordError = validatePassword(password, secondPassword)
    const secretKeyError = validateSecretKey(secretKey, secondSecretKey)

    let errorStatus = true
    if (!emailError && !passwordError && !secretKeyError) {
        errorStatus = false
    }

    return ({
        emailError,
        passwordError,
        secretKeyError,
        errorStatus
    })
}