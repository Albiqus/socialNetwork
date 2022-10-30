const SET_USERS_PRELOADER = 'SET_LOGIN_PRELOADER'
const SET_PAGES_COUNT = 'SET_PAGES_COUNT'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_IS_NO_USERS = 'SET_IS_NO_USERS'
const RESET_USERS_SETTINGS = 'RESET_SETTINGS'


const startState = {
    usersPreloader: false,
    pagesCount: null,
    currentPage: 1,
    users: null,
    isNoUsers: false
}

export const usersReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_USERS_PRELOADER: {
            return {
                ...state,
                usersPreloader: action.status
            }
        }
        case SET_PAGES_COUNT: {
            return {
                ...state,
                pagesCount: action.count
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_IS_NO_USERS: {
            return {
                ...state,
                isNoUsers: action.status
            }
        }
        case RESET_USERS_SETTINGS: {
            return {
                ...state,
                pagesCount: null,
                currentPage: 1,
                users: null,
                isNoUsers: false
            }
        }
        default:
            return state;
    }
}

export const setUsersPreloader = (status) => ({
    type: SET_USERS_PRELOADER,
    status
})

export const setPagesCount = (count) => ({
    type: SET_PAGES_COUNT,
    count
})

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
})

export const setUsers = (users) => ({
    type: SET_USERS,
    users
})


export const setIsNoUsers = (status) => ({
    type: SET_IS_NO_USERS,
    status
})


export const resetUsersSettings = () => ({
    type: RESET_USERS_SETTINGS
})