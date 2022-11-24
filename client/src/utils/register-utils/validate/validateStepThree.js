import { REGISTRATION_ERRORS } from "../../../data/errors";
import { MIN_SECRET_KEY_LENGTH } from "../../../data/lengths";


const validateSecretKey = (secretKey) => {
    if (secretKey.length < MIN_SECRET_KEY_LENGTH) {
        return (REGISTRATION_ERRORS.secretKey.invalidSymbolsAmount)
    }
}


export const validate = (secretKey) => {
    const secretKeyError = validateSecretKey(secretKey)

    let errorStatus = true
    if (!secretKeyError) errorStatus = false
    
    return ({
        secretKeyError,
        errorStatus
    })
}