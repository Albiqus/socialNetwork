const SET_SOMETHING = 'SET_SOMETHING'

const startState = {
    isAuth: false
}


export const authReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_SOMETHING: {
            return {
                ...state,
            }
        }
        default:
            return state;
    }
}

export const setSomething = (something) => ({
    type: SET_SOMETHING,
    something
})