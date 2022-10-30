import {
    LOGIN_ERRORS,
    MIN_LOGIN_LENGTH,
    MIN_PASSWORD_LENGTH
}
from "../../data/login-data";


const validateLogin = (login) => {
    if (login.length < MIN_LOGIN_LENGTH) {
        return LOGIN_ERRORS.login.empty
    }
}
const validatePassword = (password) => {
    if (password.length < MIN_PASSWORD_LENGTH) {
        return LOGIN_ERRORS.password.empty
    }
}

export const validate = (login, password) => {
    const loginError = validateLogin(login)
    const passwordError = validatePassword(password)

    let errorStatus = true
    if (!loginError && !passwordError) {
        errorStatus = false
    }

    return ({
        loginError,
        passwordError,
        errorStatus
    })
}