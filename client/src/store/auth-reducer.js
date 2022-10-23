const SET_IS_AUTH = 'SET_IS_AUTH'

const startState = {
    isAuth: false
}


export const authReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_IS_AUTH: {
            return {
                ...state,
                isAuth: action.status
            }
        }
        default:
            return state;
    }
}

export const setIsAuth = (status) => ({
    type: SET_IS_AUTH,
    status
})