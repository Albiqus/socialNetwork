const SET_FRIENDS_PRELOADER = 'SET_FRIENDS_PRELOADER'


const SET_FRIENDS_REQUESTS = 'SET_FRIENDS_REQUESTS'
const DELETE_REQUEST = 'DELETE_REQUEST'
const SET_ACCEPT_REQUEST_PRELOADER_ID = 'SET_ACCEPT_REQUEST_PRELOADER_ID'
const SET_REJECT_REQUEST_PRELOADER_ID = 'SET_REJECT_REQUEST_PRELOADER_ID'


const SET_FRIENDS = 'SET_FRIENDS'
const SET_FRIEND = 'SET_FRIEND'
const DELETE_ONE_FRIEND = 'DELETE_ONE_FRIEND'
const SET_DELETE_FRIEND_PRELOADER_ID = 'SET_DELETE_FRIEND_PRELOADER_ID'

const startState = {
    friendsPreloader: false,


    friendsRequests: null,
    friendsRequestsCount: null,
    acceptRequestPreloaderId: false,
    rejectRequestPreloaderId: false,


    friends: null,
    deleteFriendPreloaderId: false
}

export const friendsReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_FRIENDS_PRELOADER: {
            return {
                ...state,
                friendsPreloader: action.status
            }
        }
        case SET_FRIENDS_REQUESTS: {
            return {
                ...state,
                friendsRequests: action.friendsRequests
            }
        }
        case DELETE_REQUEST: {
            let newFriendsRequests = null
            if (state.friendsRequests) newFriendsRequests = [...state.friendsRequests].filter(request => request.newFriendId !== action.newFriendId)
            if (newFriendsRequests?.length === 0) newFriendsRequests = null
            return {
                ...state,
                friendsRequests: newFriendsRequests
            }
        }
        case SET_ACCEPT_REQUEST_PRELOADER_ID: {
            return {
                ...state,
                acceptRequestPreloaderId: action.id
            }
        }
        case SET_REJECT_REQUEST_PRELOADER_ID: {
            return {
                ...state,
                rejectRequestPreloaderId: action.id
            }
        }
        case SET_FRIENDS: {
            if (action.friends.length === 0) action.friends = null
            return {
                ...state,
                friends: action.friends
            }
        }
        case SET_FRIEND: {
            let newFriends;
            if (!state.friends) newFriends = [action.friend]
            if (state.friends) newFriends = [action.friend, ...state.friends]
            return {
                ...state,
                friends: newFriends
            }
        }
        case DELETE_ONE_FRIEND: {
            let newFriends = null
            if (state.friends) newFriends = [...state.friends].filter((friend) => friend.friendId !== action.friendId)
            if (newFriends?.length === 0) newFriends = null
            return {
                ...state,
                friends: newFriends
            }
        }
        case SET_DELETE_FRIEND_PRELOADER_ID: {
            return {
                ...state,
                deleteFriendPreloaderId: action.id
            }
        }

        default:
            return state;
    }
}


export const setFriendsPreloader = (status) => ({
    type: SET_FRIENDS_PRELOADER,
    status
})


export const setFriendsRequests = (friendsRequests) => ({
    type: SET_FRIENDS_REQUESTS,
    friendsRequests
})
export const deleteRequest = (newFriendId) => ({
    type: DELETE_REQUEST,
    newFriendId
})


export const setAcceptRequestPreloader = (id) => ({
    type: SET_ACCEPT_REQUEST_PRELOADER_ID,
    id
})
export const setRejectRequestPreloader = (id) => ({
    type: SET_REJECT_REQUEST_PRELOADER_ID,
    id
})


export const setFriends = (friends) => ({
    type: SET_FRIENDS,
    friends
})
export const setFriend = (friend) => ({
    type: SET_FRIEND,
    friend
})
export const deleteOneFriend = (friendId) => ({
    type: DELETE_ONE_FRIEND,
    friendId
})
export const setDeleteFriendPreloader = (id) => ({
    type: SET_DELETE_FRIEND_PRELOADER_ID,
    id
})