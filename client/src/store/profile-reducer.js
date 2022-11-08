const SET_PROFILE_DATA = 'SET_SET_PROFILE_DATA'
const SET_PROFILE_PRELOADER = 'SET_PROFILE_PRELOADER'
const SET_PROFILE_ERROR = 'SET_PROFILE_ERROR'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'
const SET_PROFILE_AVATAR_AVERAGE = 'SET_PROFILE_AVATAR_AVERAGE'
const SET_POSTS = 'SET_POSTS'
const SET_NEW_POST_PRELOADER = 'SET_NEW_POST_PRELOADER'
const DELETE_POST_PRELOADER = 'DELETE_POST_PRELOADER'

const startState = {

    profileData: {
        firstName: '',
        lastName: '',
        status: '',
        city: '',
        dateOfBirthday: '',
        maritalStatus: '',
        avatarBig: '',
        avatarAverage: '',
        avatarSmall: '',
    },
    posts: null,
    newPostPreloader: false,
    deletePostPreloader: {
        status: false,
        postId: null
    },
    profilePreloader: false,
    profileError: false,
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
        case SET_PROFILE_AVATAR_AVERAGE: {
            return {
                ...state,
                profileData: {
                    ...state.profileData,
                    avatarAverage: action.avatarAverageName
                }
            }
        }
        case SET_POSTS: {
            return {
                ...state,
                posts: action.posts
            }
        }
        case SET_NEW_POST_PRELOADER: {
            return {
                ...state,
                newPostPreloader: action.status
            }
        }
        case DELETE_POST_PRELOADER: {
            return {
                ...state,
                deletePostPreloader: {
                    status: action.status,
                    postId: action.postId
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

export const setProfileAvatarAverage = (avatarAverageName) => ({
    type: SET_PROFILE_AVATAR_AVERAGE,
    avatarAverageName
})

export const setPosts = (posts) => ({
    type: SET_POSTS,
    posts
})

export const setNewPostPreloader = (status) => ({
    type: SET_NEW_POST_PRELOADER,
    status
})

export const setDeletePostPreloader = (status, postId) => ({
    type: DELETE_POST_PRELOADER,
    status,
    postId
})