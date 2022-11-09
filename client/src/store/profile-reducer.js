const SET_PROFILE_DATA = 'SET_SET_PROFILE_DATA'
const SET_PROFILE_PRELOADER = 'SET_PROFILE_PRELOADER'
const SET_PROFILE_ERROR = 'SET_PROFILE_ERROR'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'
const SET_PROFILE_AVATAR_AVERAGE = 'SET_PROFILE_AVATAR_AVERAGE'

const SET_POSTS = 'SET_POSTS'
const SET_NEW_POST = 'SET_NEW_POST'
const UPDATE_POST = 'UPDATE_POST'
const DELETE_POST = 'DELETE_POST'

const SET_LIKED_POSTS_IDS = 'SET_LIKED_POSTS_IDS'
const SET_NEW_LIKED_POSTS_ID = 'SET_NEW_LIKED_POSTS_ID'
const DELETE_LIKED_POST_ID = 'DELETE_LIKED_POST_ID'

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
    likedPostsIds: null,
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
        case SET_NEW_POST: {
            const newPosts = [...state.posts]
            newPosts.unshift(action.newPost)
            return {
                ...state,
                posts: newPosts
            }
        }
        case UPDATE_POST: {
            const newPosts = [...state.posts].map((post) => {
                if (post.id === action.updatedPost.id) {
                    return action.updatedPost
                }
                return post
            })
            return {
                ...state,
                posts: newPosts
            }
        }
        case DELETE_POST: {
            const newPosts = [...state.posts].filter(post => post.id !== action.deletedPostId)
            return {
                ...state,
                posts: newPosts
            }
        }
        case SET_LIKED_POSTS_IDS: {
            return {
                ...state,
                likedPostsIds: action.postsIds
            }
        }
        case SET_NEW_LIKED_POSTS_ID: {
            return {
                ...state,
                likedPostsIds: [...state.likedPostsIds, action.postsId]
            }
        }
        case DELETE_LIKED_POST_ID: {
            const newLikedPostsIds = [...state.likedPostsIds].filter(postId => postId !== action.deletedLikedPostId)
            return {
                ...state,
                likedPostsIds: newLikedPostsIds
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
export const setNewPost = (newPost) => ({
    type: SET_NEW_POST,
    newPost
})
export const updatePost = (updatedPost) => ({
    type: UPDATE_POST,
    updatedPost
})
export const deletePost = (deletedPostId) => ({
    type: DELETE_POST,
    deletedPostId
})


export const setLikedPostsIds = (postsIds) => ({
    type: SET_LIKED_POSTS_IDS,
    postsIds
})
export const setNewLikedPostsId = (postsId) => ({
    type: SET_NEW_LIKED_POSTS_ID,
    postsId
})
export const deleteLikedPostId = (deletedLikedPostId) => ({
    type: DELETE_LIKED_POST_ID,
    deletedLikedPostId
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