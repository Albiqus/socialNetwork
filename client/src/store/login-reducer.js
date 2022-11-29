const SET_INVALID_AUTH_ERROR = 'SET_INVALID_AUTH_ERROR'
const SET_LOGIN_PRELOADER = 'SET_LOGIN_PRELOADER'
const SET_SUCCESS_USER_DELETE_STATUS = 'SET_SUCCESS_USER_DELETE_STATUS'

const startState = {
    invalidAuthError: null,
    loginPreloader: false,
    successUserDeleteStatus: false
}

export const loginReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_INVALID_AUTH_ERROR: {
            return {
                ...state,
                invalidAuthError: action.text
            }
        }
        case SET_LOGIN_PRELOADER: {
            return {
                ...state,
                loginPreloader: action.status
            }
        }
        case SET_SUCCESS_USER_DELETE_STATUS: {
            return {
                ...state,
                successUserDeleteStatus: action.status
            }
        }
        default:
            return state;
    }
}

export const setInvalidAuthError = (text) => ({
    type: SET_INVALID_AUTH_ERROR,
    text
})

export const setLoginPreloader = (status) => ({
    type: SET_LOGIN_PRELOADER,
    status
})

export const setSuccessUserDeleteStatus = (status) => ({
    type: SET_SUCCESS_USER_DELETE_STATUS,
    status
})