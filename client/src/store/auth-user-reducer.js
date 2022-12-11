const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const SET_FRIENDS_REQUESTS_COUNT = 'SET_FRIENDS_REQUESTS_COUNT'

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
        case SET_FRIENDS_REQUESTS_COUNT: {
            const newAuthUserData = {
                ...state.authUserData,
                friendsRequestsCount: action.count
            }

            return {
                ...state,
                authUserData: newAuthUserData
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
export const setFriendsRequestsCount = (count) => ({
    type: SET_FRIENDS_REQUESTS_COUNT,
    count
})