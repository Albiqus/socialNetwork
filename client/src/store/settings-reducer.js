const SET_CURRENT_SECTION = 'SET_CURRENT_SECTION'


const SET_DATA_SETTINGS = 'SET_DATA_SETTINGS'
const SET_DATA_SECTION_PRELOADER = 'SET_DATA_SECTION_PRELOADER'
const SET_FIRST_NAME = 'SET_FIRST_NAME'
const SET_LAST_NAME = 'SET_LAST_NAME'
const SET_COUNTRY = 'SET_COUNTRY'
const SET_CITY = 'SET_CITY'
const SET_PHONE = 'SET_PHONE'
const SET_DATE_OF_BIRTH = 'SET_DATE_OF_BIRTH'
const SET_GENDER = 'SET_GENDER'
const SET_MARITAL_STATUS = 'SET_MARITAL_STATUS'
const SET_SECCESS_DATA_UPDATE = 'SET_SECCESS_DATA_UPDATE'


const SET_SAFETY_SETTINGS = 'SET_SAFETY_SETTINGS'
const SET_SAFETY_SECTION_PRELOADER = 'SET_SAFETY_SECTION_PRELOADER'
const SET_EMAIL = 'SET_EMAIL'
const SET_NEW_PASSWORD = 'SET_NEW_PASSWORD'
const SET_SECOND_NEW_PASSWORD = 'SET_SECOND_NEW_PASSWORD'
const SET_SECRET_KEY = 'SET_SECRET_KEY'
const SET_SECOND_SECRET_KEY = 'SET_SECOND_SECRET_KEY'
const SET_CURRENT_PASSWORD = 'SET_CURRENT_PASSWORD'
const SET_EXISTING_USER_ERROR = 'SET_EXISTING_USER_ERROR'
const SET_INVALID_PASSWORD_ERROR = 'SET_INVALID_PASSWORD_ERROR'
const SET_SUCCESS_SAFETY_UPDATE = 'SET_SUCCESS_SAFETY_UPDATE'

const startState = {
    currentSection: 'data',


    dataSettings: null,
    dataSectionPreloader: false,
    successDataUpdate: false,


    safetySettings: null,
    safetySectionPreloader: false,
    existingUserError: null,
    invalidPasswordError: null,
    successSafetyUpdate: false,
}

export const settingsReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_CURRENT_SECTION: {
            return {
                ...state,
                currentSection: action.currentSection
            }
        }
        case SET_DATA_SETTINGS: {
            return {
                ...state,
                dataSettings: action.data
            }
        }
        case SET_DATA_SECTION_PRELOADER: {
            return {
                ...state,
                dataSectionPreloader: action.status
            }
        }
        case SET_FIRST_NAME: {
            return {
                ...state,
                dataSettings: {
                    ...state.dataSettings,
                    firstName: action.value
                }
            }
        }
        case SET_LAST_NAME: {
            return {
                ...state,
                dataSettings: {
                    ...state.dataSettings,
                    lastName: action.value
                }
            }
        }
        case SET_COUNTRY: {
            return {
                ...state,
                dataSettings: {
                    ...state.dataSettings,
                    country: action.value
                }
            }
        }
        case SET_CITY: {
            return {
                ...state,
                dataSettings: {
                    ...state.dataSettings,
                    city: action.value
                }
            }
        }
        case SET_PHONE: {
            return {
                ...state,
                dataSettings: {
                    ...state.dataSettings,
                    phone: action.value
                }
            }
        }
        case SET_DATE_OF_BIRTH: {
            return {
                ...state,
                dataSettings: {
                    ...state.dataSettings,
                    dateOfBirth: action.value
                }
            }
        }
        case SET_GENDER: {
            return {
                ...state,
                dataSettings: {
                    ...state.dataSettings,
                    gender: action.value
                }
            }
        }
        case SET_MARITAL_STATUS: {
            return {
                ...state,
                dataSettings: {
                    ...state.dataSettings,
                    maritalStatus: action.value
                }
            }
        }
        case SET_SECCESS_DATA_UPDATE: {
            return {
                ...state,
                successDataUpdate: action.status
            }
        }
        case SET_SAFETY_SETTINGS: {
            return {
                ...state,
                safetySettings: action.data
            }
        }
        case SET_SAFETY_SECTION_PRELOADER: {
            return {
                ...state,
                safetySectionPreloader: action.status
            }
        }
        case SET_EMAIL: {
            return {
                ...state,
                safetySettings: {
                    ...state.safetySettings,
                    email: action.value
                }
            }
        }
        case SET_NEW_PASSWORD: {
            return {
                ...state,
                safetySettings: {
                    ...state.safetySettings,
                    newPassword: action.value
                }
            }
        }
        case SET_SECOND_NEW_PASSWORD: {
            return {
                ...state,
                safetySettings: {
                    ...state.safetySettings,
                    secondNewPassword: action.value
                }
            }
        }
        case SET_SECRET_KEY: {
            return {
                ...state,
                safetySettings: {
                    ...state.safetySettings,
                    newSecretKey: action.value
                }
            }
        }
        case SET_SECOND_SECRET_KEY: {
            return {
                ...state,
                safetySettings: {
                    ...state.safetySettings,
                    secondNewSecretKey: action.value
                }
            }
        }
        case SET_CURRENT_PASSWORD: {
            return {
                ...state,
                safetySettings: {
                    ...state.safetySettings,
                    currentPassword: action.value
                }
            }
        }
        case SET_EXISTING_USER_ERROR: {
            return {
                ...state,
                existingUserError: action.error
            }
        }
        case SET_INVALID_PASSWORD_ERROR: {
            return {
                ...state,
                invalidPasswordError: action.error
            }
        }
        case SET_SUCCESS_SAFETY_UPDATE: {
            return {
                ...state,
                successSafetyUpdate: action.status
            }
        }
        default:
            return state;
    }
}

export const setCurrentSection = (currentSection) => ({
    type: SET_CURRENT_SECTION,
    currentSection
})


export const setDataSettings = (data) => ({
    type: SET_DATA_SETTINGS,
    data
})
export const setDataSectionPreloader = (status) => ({
    type: SET_DATA_SECTION_PRELOADER,
    status
})
export const setFirstName = (value) => ({
    type: SET_FIRST_NAME,
    value
})
export const setLastName = (value) => ({
    type: SET_LAST_NAME,
    value
})
export const setCountry = (value) => ({
    type: SET_COUNTRY,
    value
})
export const setCity = (value) => ({
    type: SET_CITY,
    value
})
export const setPhone = (value) => ({
    type: SET_PHONE,
    value
})
export const setDateOfBirth = (value) => ({
    type: SET_DATE_OF_BIRTH,
    value
})
export const setGender = (value) => ({
    type: SET_GENDER,
    value
})
export const setMaritalStatus = (value) => ({
    type: SET_MARITAL_STATUS,
    value
})
export const setSuccessDataUpdate = (status) => ({
    type: SET_SECCESS_DATA_UPDATE,
    status
})



export const setSafetySettings = (data) => ({
    type: SET_SAFETY_SETTINGS,
    data
})
export const setSafetySectionPreloader = (status) => ({
    type: SET_SAFETY_SECTION_PRELOADER,
    status
})
export const setEmail = (value) => ({
    type: SET_EMAIL,
    value
})
export const setNewPassword = (value) => ({
    type: SET_NEW_PASSWORD,
    value
})
export const setSecondNewPassword = (value) => ({
    type: SET_SECOND_NEW_PASSWORD,
    value
})
export const setSecretKey = (value) => ({
    type: SET_SECRET_KEY,
    value
})
export const setSecondSecretKey = (value) => ({
    type: SET_SECOND_SECRET_KEY,
    value
})
export const setCurrentPassword = (value) => ({
    type: SET_CURRENT_PASSWORD,
    value
})
export const setExistingUserError = (error) => ({
    type: SET_EXISTING_USER_ERROR,
    error
})
export const setInvalidPasswordError = (error) => ({
    type: SET_INVALID_PASSWORD_ERROR,
    error
})
export const setSuccessSafetyUpdate = (status) => ({
    type: SET_SUCCESS_SAFETY_UPDATE,
    status
})