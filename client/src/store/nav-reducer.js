const SET_NAV_VISIBLE = 'SET_NAV_VISIBLE'

const startState = {
    navVisible: null,
}

export const navReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_NAV_VISIBLE: {
            return {
                ...state,
                navVisible: action.status
            }
        }
    default:
        return state;
    }
}

export const setNavVisible = (status) => ({
    type: SET_NAV_VISIBLE,
    status
})