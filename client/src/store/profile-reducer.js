const SET_PROFILE_DATA = 'SET_SET_PROFILE_DATA'
const SET_PROFILE_PRELOADER = 'SET_PROFILE_PRELOADER'
const SET_PROFILE_ERROR = 'SET_PROFILE_ERROR'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'
const SET_PROFILE_AVATAR = 'SET_PROFILE_AVATAR'


const SET_IS_POST_CREATION = 'SET_IS_POST_CREATION'
const SET_POSTS = 'SET_POSTS'
const SET_NEW_POST = 'SET_NEW_POST'
const UPDATE_POST = 'UPDATE_POST'
const DELETE_POST = 'DELETE_POST'
const SET_LIKED_POSTS_IDS = 'SET_LIKED_POSTS_IDS'
const SET_NEW_LIKED_POSTS_ID = 'SET_NEW_LIKED_POSTS_ID'
const DELETE_LIKED_POST_ID = 'DELETE_LIKED_POST_ID'
const SET_POST_LIKES_USERS = 'SET_POST_LIKES_USERS'
const RESET_POST_LIKES_USERS = 'RESET_POST_LIKES_USERS'
const SET_POST_LIKES_MODAL_STATUS = 'SET_POST_LIKES_MODAL_STATUS'


const SET_COMMENTS = 'SET_COMMENTS'
const SET_NEW_COMMENT = 'SET_NEW_COMMENT'
const UPDATE_COMMENT = 'UPDATE_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'
const SET_LIKED_COMMENTS_IDS = 'SET_LIKED_COMMENTS_IDS'
const SET_NEW_LIKED_COMMENT_ID = 'SET_NEW_LIKED_COMMENT_ID'
const DELETE_LIKED_COMMENT_ID = 'DELETE_LIKED_COMMENT_ID'
const SET_NEW_OPEN_COMMENTS_POST_ID = 'SET_NEW_OPEN_COMMENTS_POST_ID'
const SET_COMMENTS_PRELOADER = 'SET_COMMENTS_PRELOADER'
const SET_COMMENT_LIKES_USERS = 'SET_COMMENT_LIKES_USERS'
const RESET_COMMENT_LIKES_USERS = 'RESET_COMMENT_LIKES_USERS'
const SET_COMMENT_LIKES_MODAL_STATUS = 'SET_COMMENT_LIKES_MODAL_STATUS'


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
        avatar: ''
    },


    isPostCreation: false,
    posts: [],
    likedPostsIds: null,
    newPostPreloader: false,
    deletePostPreloader: {
        status: false,
        postId: null
    },
    postLikesUsers: null,
    postLikesModalStatus: false,


    comments: {},
    likedCommentsIds: null,
    openСommentsPostsIds: [],
    commentsPreloader: false,
    commentLikesUsers: null,
    commentLikesModalStatus: false,


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
        case SET_PROFILE_AVATAR: {
            return {
                ...state,
                profileData: {
                    ...state.profileData,
                    avatar: action.avatarName
                }
            }
        }
        case SET_IS_POST_CREATION: {
            return {
                ...state,
                isPostCreation: action.status
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
        case SET_POST_LIKES_USERS: {
            return {
                ...state,
                postLikesUsers: action.postLikesUsers
            }
        }
        case RESET_POST_LIKES_USERS: {
            return {
                ...state,
                postLikesUsers: null
            }
        }
        case SET_POST_LIKES_MODAL_STATUS: {
            return {
                ...state,
                postLikesModalStatus: action.status
            }
        }
        case SET_COMMENTS: {
            let newComments = {
                ...state.comments
            }
            if (!action.isNoComments) {
                const postId = action.comments[0].postId
                newComments[postId] = action.comments
            }
            if (action.isNoComments) {
                newComments[action.comments.postId] = []
            }
            return {
                ...state,
                comments: newComments
            }
        }
        case SET_NEW_COMMENT: {
            let newComments = {
                ...state.comments
            }
            newComments[action.comment.postId].push(action.comment)
            return {
                ...state,
                comments: newComments
            }
        }
        case UPDATE_COMMENT: {
            const newComments = {
                ...state.comments
            }
            newComments[action.postId] = newComments[action.postId].map((comment) => {
                if (comment.id === action.updatedComment.id) {
                    return action.updatedComment
                }
                return comment
            })
            return {
                ...state,
                comments: newComments
            }
        }
        case DELETE_COMMENT: {
            const comments = {
                ...state.comments
            }
            const newComments = comments[action.postId].filter((comment) => comment.id !== action.deletedCommentId)
            comments[action.postId] = newComments
            return {
                ...state,
                comments: comments
            }
        }
        case SET_LIKED_COMMENTS_IDS: {
            return {
                ...state,
                likedCommentsIds: action.commentsIds
            }
        }
        case SET_NEW_LIKED_COMMENT_ID: {
            return {
                ...state,
                likedCommentsIds: [...state.likedCommentsIds, action.commentId]
            }
        }
        case DELETE_LIKED_COMMENT_ID: {
            const newLikedCommentsIds = [...state.likedCommentsIds].filter(commentId => commentId !== action.deletedLikedCommentId)
            return {
                ...state,
                likedCommentsIds: newLikedCommentsIds
            }
        }
        case SET_NEW_OPEN_COMMENTS_POST_ID: {
            const newOpenСommentsPostsIds = [...state.openСommentsPostsIds, action.postId]
            return {
                ...state,
                openСommentsPostsIds: newOpenСommentsPostsIds
            }
        }
        case SET_COMMENTS_PRELOADER: {
            return {
                ...state,
                commentsPreloader: action.status
            }
        }
        case SET_COMMENT_LIKES_USERS: {
            return {
                ...state,
                commentLikesUsers: action.commentLikesUsers
            }
        }
        case RESET_COMMENT_LIKES_USERS: {
            return {
                ...state,
                commentLikesUsers: null
            }
        }
        case SET_COMMENT_LIKES_MODAL_STATUS: {
            return {
                ...state,
                commentLikesModalStatus: action.status
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
export const setProfileAvatar = (avatarName) => ({
    type: SET_PROFILE_AVATAR,
    avatarName
})


export const setIsPostCreation = (status) => ({
    type: SET_IS_POST_CREATION,
    status
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
export const setPostLikesUsers = (postLikesUsers) => ({
    type: SET_POST_LIKES_USERS,
    postLikesUsers
})
export const resetPostLikesUsers = () => ({
    type: RESET_POST_LIKES_USERS
})
export const setPostLikesModalStatus = (status) => ({
    type: SET_POST_LIKES_MODAL_STATUS,
    status
})


export const setComments = (comments, isNoComments) => ({
    type: SET_COMMENTS,
    comments,
    isNoComments
})
export const setNewComment = (comment) => ({
    type: SET_NEW_COMMENT,
    comment
})
export const updateComment = (updatedComment, postId) => ({
    type: UPDATE_COMMENT,
    updatedComment,
    postId
})
export const deleteComment = (deletedCommentId, postId) => ({
    type: DELETE_COMMENT,
    deletedCommentId,
    postId
})
export const setLikedCommentsIds = (commentsIds) => ({
    type: SET_LIKED_COMMENTS_IDS,
    commentsIds
})
export const setNewLikedCommentId = (commentId) => ({
    type: SET_NEW_LIKED_COMMENT_ID,
    commentId
})
export const deleteLikedCommentId = (deletedLikedCommentId) => ({
    type: DELETE_LIKED_COMMENT_ID,
    deletedLikedCommentId
})
export const setNewOpenCommentsPostId = (postId) => ({
    type: SET_NEW_OPEN_COMMENTS_POST_ID,
    postId
})
export const setCommentsPreloader = (status) => ({
    type: SET_COMMENTS_PRELOADER,
    status
})
export const setCommentLikesUsers = (commentLikesUsers) => ({
    type: SET_COMMENT_LIKES_USERS,
    commentLikesUsers
})
export const resetCommentLikesUsers = () => ({
    type: RESET_COMMENT_LIKES_USERS
})
export const setCommentLikesModalStatus = (status) => ({
    type: SET_COMMENT_LIKES_MODAL_STATUS,
    status
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