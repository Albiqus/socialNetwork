import { LOGIN_ERRORS } from "../../data/errors";
import { MIN_LOGIN_INPUT_LENGTH } from "../../data/lengths";


const validateLogin = (login) => {
    if (login.length < MIN_LOGIN_INPUT_LENGTH) return LOGIN_ERRORS.login.empty
}

const validatePassword = (password) => {
    if (password.length < MIN_LOGIN_INPUT_LENGTH) return LOGIN_ERRORS.password.empty
}

export const validate = (login, password) => {
    const loginError = validateLogin(login)
    const passwordError = validatePassword(password)

    let errorStatus = true
    if (!loginError && !passwordError) errorStatus = false

    return ({
        loginError,
        passwordError,
        errorStatus
    })
}