import { setFriendsRequestsCount } from "../../store/auth-user-reducer";
import {
    deleteRequest,
    setAcceptRequestPreloader,
    setFriend
} from "../../store/friends-reducer";

export const addFriend = (friendId, ownerId, newFriendData, ownerData) => {
    return (dispatch) => {
        dispatch(setAcceptRequestPreloader(friendId))
        fetch(`http://localhost:4000/api/addFriend`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                friendId,
                ownerId,
                newFriendData,
                ownerData
            })
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.statusCode === 1) {
                dispatch(setAcceptRequestPreloader(false))
                dispatch(deleteRequest(friendId))
                dispatch(setFriend(response.data.friend))
                dispatch(setFriendsRequestsCount(response.data.friendsRequestsCount))
            }
        })
    }
}