import {
    setFriendsRequestsCount
} from "../../store/auth-user-reducer";
import {
    deleteRequest,
    setRejectRequestPreloader
} from "../../store/friends-reducer";
import {
    setFriendButtonPreloader,
    setFriendRequestStatus
} from "../../store/profile-reducer";


export const deleteFriendRequest = (newFriendId, ownerId) => {
    return (dispatch) => {
        dispatch(setFriendButtonPreloader(true))
        dispatch(setRejectRequestPreloader(newFriendId))
        fetch(`http://localhost:4000/api/deleteFriendRequest?newFriendId=${newFriendId}&ownerId=${ownerId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.statusCode === 1) {
                dispatch(setFriendRequestStatus(false))
                dispatch(deleteRequest(response.data.newFriendId))
                dispatch(setFriendsRequestsCount(response.data.friendsRequestsCount))

                dispatch((setFriendButtonPreloader(false)))
                dispatch(setRejectRequestPreloader(false))
            }
        })
    }
}