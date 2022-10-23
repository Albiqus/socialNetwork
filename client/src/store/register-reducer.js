const SET_SUCCESS_REGISTRATION = 'SET_SUCCESS_REGISTRATION'
const SET_CURRENT_STEP = 'SET_CURRENT_STEP'

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
const SET_SECRET_KEY = 'SET_SECRET_KEY'

const SET_EXISTING_USER_ERROR = 'SET_EXISTING_USER_ERROR'
const SET_MALE_SELECTED = 'SET_MALE_SELECTED'
const SET_FEMALE_SELECTED = 'SET_FEMALE_SELECTED'
const SET_UNMARRIED_SELECTED = 'UNMARRIED_SELECTED'
const SET_MARRIED_SELECTED = 'SET_MARRIED_SELECTED'

const startState = {
    successRegistrationStatus: false,
    currentStep: 1,
    userData: {
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
        secretKey: ''
    },
    existingUserError: null,
    maleSelected: false,
    femaleSelected: false,
    unmarriedSelected: false,
    marriedSelected: false,
}


export const registerReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_SUCCESS_REGISTRATION: {
            return {
                ...state,
                successRegistrationStatus: action.status
            }
        }
        case SET_CURRENT_STEP: {
            return {
                ...state,
                currentStep: action.currentStep
            }
        }
        case SET_FIRST_NAME: {
            return {
                ...state,
                userData: {
                    ...state.userData,
                    firstName: action.firstName
                }
            }
        }
        case SET_LAST_NAME: {
            return {
                ...state,
                userData: {
                    ...state.userData,
                    lastName: action.lastName
                }
            }
        }
        case SET_EMAIL: {
            return {
                ...state,
                userData: {
                    ...state.userData,
                    email: action.email
                }
            }
        }
        case SET_PASSWORD: {
            return {
                ...state,
                userData: {
                    ...state.userData,
                    password: action.password
                }
            }
        }
        case SET_SECOND_PASSWORD: {
            return {
                ...state,
                userData: {
                    ...state.userData,
                    secondPassword: action.secondPassword
                }
            }
        }
        case SET_COUNTRY: {
            return {
                ...state,
                userData: {
                    ...state.userData,
                    country: action.country
                }
            }
        }
        case SET_CITY: {
            return {
                ...state,
                userData: {
                    ...state.userData,
                    city: action.city
                }
            }
        }
        case SET_PHONE: {
            return {
                ...state,
                userData: {
                    ...state.userData,
                    phone: action.phone
                }
            }
        }
        case SET_DATE_OF_BIRTH: {
            return {
                ...state,
                userData: {
                    ...state.userData,
                    dateOfBirth: action.dateOfBirth
                }
            }
        }
        case SET_GENDER: {
            return {
                ...state,
                userData: {
                    ...state.userData,
                    gender: action.gender
                }
            }
        }
        case SET_MARITAL_STATUS: {
            return {
                ...state,
                userData: {
                    ...state.userData,
                    maritalStatus: action.maritalStatus
                }
            }
        }
        case SET_SECRET_KEY: {
            return {
                ...state,
                userData: {
                    ...state.userData,
                    secretKey: action.secretKey
                }
            }
        }
        case SET_EXISTING_USER_ERROR: {
            return {
                ...state,
                existingUserError: action.error
            }
        }
        case SET_MALE_SELECTED: {
            return {
                ...state,
                maleSelected: action.status
            }
        }
        case SET_FEMALE_SELECTED: {
            return {
                ...state,
                femaleSelected: action.status
            }
        }
        case SET_UNMARRIED_SELECTED: {
            return {
                ...state,
                unmarriedSelected: action.status
            }
        }
        case SET_MARRIED_SELECTED: {
            return {
                ...state,
                marriedSelected: action.status
            }
        }
        default:
            return state;
    }
}

export const setSuccessRegistrationStatus = (status) => ({
    type: SET_SUCCESS_REGISTRATION,
    status
})

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

export const setSecretKey = (secretKey) => ({
    type: SET_SECRET_KEY,
    secretKey
})

export const setExistingUserError = (error) => ({
    type: SET_EXISTING_USER_ERROR,
    error
})

export const setMaleSelected = (status) => ({
    type: SET_MALE_SELECTED,
    status
})

export const setFemaleSelected = (status) => ({
    type: SET_FEMALE_SELECTED,
    status
})

export const setUnmarriedSelected = (status) => ({
    type: SET_UNMARRIED_SELECTED,
    status
})

export const setMarriedSelected = (status) => ({
    type: SET_MARRIED_SELECTED,
    status
})