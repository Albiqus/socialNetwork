const SET_ERRORS = 'SET_ERRORS'
const SET_FIRST_NAME = 'SET_FIRST_NAME'
const SET_LAST_NAME = 'SET_LAST_NAME'
const SET_PHONE = 'SET_PHONE'
const SET_EMAIL = 'SET_EMAIL'
const SET_PASSWORD = 'SET_PASSWORD'
const SET_SECOND_PASSWORD = 'SET_SECOND_PASSWORD'
const SET_CURRENT_STEP = 'SET_CURRENT_STEP'

const startState = {
    currentStep: 1,

    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    secondPassword: '',

    contry: '',


    errors: {
        firstNameError: null,
        lastNameError: null,
        emailError: null,
        passwordError: null
    }
}


export const registerReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_CURRENT_STEP: {
            return {
                ...state,
                currentStep: action.currentStep
            }
        }
        case SET_ERRORS: {
            return {
                ...state,
                errors: {
                    firstNameError: action.errors.firstNameError,
                    lastNameError: action.errors.lastNameError,
                    emailError: action.errors.emailError,
                    passwordError: action.errors.passwordError
                }
            }
        }
        case SET_FIRST_NAME: {
            return {
                ...state,
                firstName: action.firstName
            }
        }
        case SET_LAST_NAME: {
            return {
                ...state,
                lastName: action.lastName
            }
        }
        case SET_PHONE: {
            return {
                ...state,
                phone: action.phone
            }
        }
        case SET_EMAIL: {
            return {
                ...state,
                email: action.email
            }
        }
        case SET_PASSWORD: {
            return {
                ...state,
                password: action.password
            }
        }
        case SET_SECOND_PASSWORD: {
            return {
                ...state,
                secondPassword: action.secondPassword
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

export const setErrors = (errors) => ({
    type: SET_ERRORS,
    errors
})

export const setFirstName = (firstName) => ({
    type: SET_FIRST_NAME,
    firstName
})

export const setLastName = (lastName) => ({
    type: SET_LAST_NAME,
    lastName
})

export const setPhone = (phone) => ({
    type: SET_PHONE,
    phone
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