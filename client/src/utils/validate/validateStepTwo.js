import {
    MIN_CITY_LENGTH,
    MIN_COUNTRY_LENGTH,
    PHONE_LENGTH,
    REGISTRATION_ERRORS
}
from "../../data/register-data";


const validateCountry = (country) => {
    if (country.length < MIN_COUNTRY_LENGTH && country.length !== 0 ) {
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
const validateGender = (genderStatuses) => {
    if (!genderStatuses.maleSelected && !genderStatuses.femaleSelected) {
        return (REGISTRATION_ERRORS.gender.empty)
    }
}
const validateMaritalStatus = (maritalStatusStatuses) => {
    if (!maritalStatusStatuses.unmarriedSelected && !maritalStatusStatuses.marriedSelected) {
        return (REGISTRATION_ERRORS.maritalStatus.empty)
    }
}


export const validate = (country, city, phone, genderStatuses, maritalStatusStatuses) => {
    const countryError = validateCountry(country)
    const cityError = validateCity(city)
    const phoneError = validatePhone(phone)
    const genderError = validateGender(genderStatuses)
    const maritalStatusError = validateMaritalStatus(maritalStatusStatuses)

    let errorStatus = true
    if (!countryError && !cityError && !phoneError && !genderError && !maritalStatusError) {
        errorStatus = false
    }

    return ({
        countryError,
        cityError,
        phoneError,
        genderError,
        maritalStatusError,
        errorStatus
    })
}