const SET_CURRENT_STEP = 'SET_CURRENT_STEP'

const SET_FIRST_NAME_ERROR = 'SET_FIRST_NAME_ERROR'
const SET_LAST_NAME_ERROR = 'SET_LAST_NAME_ERROR'
const SET_EMAIL_ERROR = 'SET_EMAIL_ERROR'
const SET_PASSWORD_ERROR = 'SET_PASSWORD_ERROR'
const SET_COUNTY_ERROR = 'SET_COUNTY_ERROR'
const SET_CITY_ERROR = 'SET_CITY_ERROR'
const SET_PHONE_ERROR = 'SET_PHONE_ERROR'
const SET_GENDER_ERROR = 'SET_GENDER_ERROR'
const SET_MARITAL_STATUS_ERROR = 'SET_MARITAL_STATUS_ERROR'

const SET_FIRST_NAME = 'SET_FIRST_NAME'
const SET_LAST_NAME = 'SET_LAST_NAME'
const SET_EMAIL = 'SET_EMAIL'
const SET_PASSWORD = 'SET_PASSWORD'
const SET_SECOND_PASSWORD = 'SET_SECOND_PASSWORD'

const SET_COUNTRY = 'SET_COUNTRY'
const SET_CITY = 'SET_CITY'
const SET_PHONE = 'SET_PHONE'
const SET_DATE_OF_BIRTH = 'SET_DATE_OF_BIRTH'
const SET_GENDER = 'SET_GENDER'
const SET_MARITAL_STATUS = 'SET_MARITAL_STATUS'

const startState = {
    currentStep: 1,
    data: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        secondPassword: '',

        country: '',
        city: '',
        phone: '',
        dateOfBirth: '',
        gender: '',
        maritalStatus: '',
    },

    firstNameError: null,
    lastNameError: null,
    emailError: null,
    passwordError: null,
    countryError: null,
    cityError: null,
    phoneError: null,
    genderError: null,
    maritalStatusError: null
}


export const registerReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_CURRENT_STEP: {
            return {
                ...state,
                currentStep: action.currentStep
            }
        }
        case SET_FIRST_NAME_ERROR: {
            return {
                ...state,
                firstNameError: action.error
            }
        }
        case SET_LAST_NAME_ERROR: {
            return {
                ...state,
                lastNameError: action.error
            }
        }
        case SET_EMAIL_ERROR: {
            return {
                ...state,
                emailError: action.error
            }
        }
        case SET_PASSWORD_ERROR: {
            return {
                ...state,
                passwordError: action.error
            }
        }
        case SET_COUNTY_ERROR: {
            return {
                ...state,
                countryError: action.error
            }
        }
        case SET_CITY_ERROR: {
            return {
                ...state,
                cityError: action.error
            }
        }
        case SET_PHONE_ERROR: {
            return {
                ...state,
                phoneError: action.error
            }
        }
        case SET_GENDER_ERROR: {
            return {
                ...state,
                genderError: action.error
            }
        }
        case SET_MARITAL_STATUS_ERROR: {
            return {
                ...state,
                maritalStatusError: action.error
            }
        }
        case SET_FIRST_NAME: {
            return {
                ...state,
                data: {
                    ...state.data,
                    firstName: action.firstName
                }
            }
        }
        case SET_LAST_NAME: {
            return {
                ...state,
                data: {
                    ...state.data,
                    lastName: action.lastName
                }
            }
        }
        case SET_EMAIL: {
            return {
                ...state,
                data: {
                    ...state.data,
                    email: action.email
                }
            }
        }
        case SET_PASSWORD: {
            return {
                ...state,
                data: {
                    ...state.data,
                    password: action.password
                }
            }
        }
        case SET_SECOND_PASSWORD: {
            return {
                ...state,
                data: {
                    ...state.data,
                    secondPassword: action.secondPassword
                }
            }
        }
        case SET_COUNTRY: {
            return {
                ...state,
                data: {
                    ...state.data,
                    country: action.country
                }
            }
        }
        case SET_CITY: {
            return {
                ...state,
                data: {
                    ...state.data,
                    city: action.city
                }
            }
        }
        case SET_PHONE: {
            return {
                ...state,
                data: {
                    ...state.data,
                    phone: action.phone
                }
            }
        }
        case SET_DATE_OF_BIRTH: {
            return {
                ...state,
                data: {
                    ...state.data,
                    dateOfBirth: action.dateOfBirth
                }
            }
        }
        case SET_GENDER: {
            return {
                ...state,
                data: {
                    ...state.data,
                    gender: action.gender
                }
            }
        }
        case SET_MARITAL_STATUS: {
            return {
                ...state,
                data: {
                    ...state.data,
                    maritalStatus: action.maritalStatus
                }
            }
        }
        default:
            return state;
    }
}



export const setCurrentStep = (currentStep) => ({
    type: SET_CURRENT_STEP,
    currentStep
})

export const setFirstName = (firstName) => ({
    type: SET_FIRST_NAME,
    firstName
})

export const setLastName = (lastName) => ({
    type: SET_LAST_NAME,
    lastName
})

export const setEmail = (email) => ({
    type: SET_EMAIL,
    email
})

export const setPassword = (password) => ({
    type: SET_PASSWORD,
    password
})

export const setSecondPassword = (secondPassword) => ({
    type: SET_SECOND_PASSWORD,
    secondPassword
})


export const setCountry = (country) => ({
    type: SET_COUNTRY,
    country
})

export const setCity = (city) => ({
    type: SET_CITY,
    city
})

export const setPhone = (phone) => ({
    type: SET_PHONE,
    phone
})

export const setDateOfBirth = (dateOfBirth) => ({
    type: SET_DATE_OF_BIRTH,
    dateOfBirth
})

export const setGender = (gender) => ({
    type: SET_GENDER,
    gender
})

export const setMaritalStatus = (maritalStatus) => ({
    type: SET_MARITAL_STATUS,
    maritalStatus
})


export const setFirstNameError = (error) => ({
    type: SET_FIRST_NAME_ERROR,
    error
})

export const setLastNameError = (error) => ({
    type: SET_LAST_NAME_ERROR,
    error
})

export const setEmailError = (error) => ({
    type: SET_EMAIL_ERROR,
    error
})

export const setPasswordError = (error) => ({
    type: SET_PASSWORD_ERROR,
    error
})

export const setCountryError = (error) => ({
    type: SET_COUNTY_ERROR,
    error
})

export const setCityError = (error) => ({
    type: SET_CITY_ERROR,
    error
})

export const setPhoneError = (error) => ({
    type: SET_PHONE_ERROR,
    error
})

export const setGenderError = (error) => ({
    type: SET_GENDER_ERROR,
    error
})

export const setMaritalStatusError = (error) => ({
    type: SET_MARITAL_STATUS_ERROR,
    error
})