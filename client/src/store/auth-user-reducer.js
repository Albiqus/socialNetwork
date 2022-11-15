const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

const startState = {
    authUserData: null
}

export const authUserReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                authUserData: action.data
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (data) => ({
    type: SET_AUTH_USER_DATA,
    data
})