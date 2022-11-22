import { REGISTRATION_ERRORS } from "../../data/errors"
import { MIN_CITY_LENGTH, MIN_COUNTRY_LENGTH, MIN_FIRST_NAME_LENGTH, MIN_LAST_NAME_LENGTH, PHONE_LENGTH } from "../../data/lengths"

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

const validateCountry = (country) => {
    if (country.length < MIN_COUNTRY_LENGTH && country.length !== 0) {
        return (REGISTRATION_ERRORS.country.invalidSymbolsAmount)
    }
}

const validateCity = (city) => {
    if (city.length < MIN_CITY_LENGTH && city.length !== 0) {
        return (REGISTRATION_ERRORS.city.invalidSymbolsAmount)
    }
}

const validatePhone = (phone) => {
    if (phone.length !== PHONE_LENGTH && phone.length !== 0) {
        return (REGISTRATION_ERRORS.phone.invalidSymbolsAmount)
    }
}

export const validate = (firstName, lastName, country, city, phone) => {
    const firstNameError = validateFirstName(firstName)
    const lastNameError = validateLastName(lastName)
    const countryError = validateCountry(country)
    const cityError = validateCity(city)
    const phoneError = validatePhone(phone)

    let errorStatus = true
    if (!firstNameError && !lastNameError && !countryError && !cityError && !phoneError) {
        errorStatus = false
    }

    return ({
        firstNameError,
        lastNameError,
        countryError,
        cityError,
        phoneError,
        errorStatus
    })
}