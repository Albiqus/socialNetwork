const SET_INVALID_AUTH_ERROR = 'SET_INVALID_AUTH_ERROR'
const SET_PRELOADER = 'SET_IS_LOGIN'

const startState = {
    invalidAuthError: null,
    preloader: false
}


export const loginReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_INVALID_AUTH_ERROR: {
            return {
                ...state,
                invalidAuthError: action.text
            }
        }
        case SET_PRELOADER: {
            return {
                ...state,
                preloader: action.status
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

export const setPreloader = (status) => ({
    type: SET_PRELOADER,
    status
})