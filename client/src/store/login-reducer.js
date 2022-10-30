const SET_INVALID_AUTH_ERROR = 'SET_INVALID_AUTH_ERROR'
const SET_LOGIN_PRELOADER = 'SET_LOGIN_PRELOADER'

const startState = {
    invalidAuthError: null,
    loginPreloader: false
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