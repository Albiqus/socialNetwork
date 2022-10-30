const SET_PROFILE_DATA = 'SET_SET_PROFILE_DATA'
const SET_PROFILE_PRELOADER = 'SET_PROFILE_PRELOADER'
const SET_PROFILE_ERROR = 'SET_PROFILE_ERROR'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'

const startState = {

    profileData: {
        firstName: '',
        lastName: '',
        status: '',
        city: '',
        dateOfBirthday: '',
        maritalStatus: '',
    },
    profilePreloader: false,
    profileError: false
}

export const profileReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_PROFILE_DATA: {
            return {
                ...state,
                profileData: action.data
            }
        }
        case SET_PROFILE_PRELOADER: {
            return {
                ...state,
                profilePreloader: action.status
            }
        }
        case SET_PROFILE_ERROR: {
            return {
                ...state,
                profileError: action.text
            }
        }
        case SET_PROFILE_STATUS: {
            return {
                ...state,
                profileData: {
                    ...state.profileData,
                    status: action.text
                }
            }
        }
    default:
        return state;
    }
}

export const setProfileData = (data) => ({
    type: SET_PROFILE_DATA,
    data
})

export const setProfilePreloader = (status) => ({
    type: SET_PROFILE_PRELOADER,
    status
})

export const setProfileError = (text) => ({
    type: SET_PROFILE_ERROR,
    text
})

export const setProfileStatus = (text) => ({
    type: SET_PROFILE_STATUS,
    text
})

