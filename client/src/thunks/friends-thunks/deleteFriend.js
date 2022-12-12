import {
    deleteOneFriend, setDeleteFriendPreloader
} from "../../store/friends-reducer";
import { setFriendButtonPreloader, setFriendStatus } from "../../store/profile-reducer";



export const deleteFriend = (friendId, ownerId) => {
    return (dispatch) => {
        dispatch(setDeleteFriendPreloader(friendId))
        dispatch(setFriendButtonPreloader(true))
        fetch(`http://localhost:4000/api/deleteFriend?friendId=${friendId}&ownerId=${ownerId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.statusCode === 1) {
                dispatch(deleteOneFriend(response.data.friendId))
                dispatch(setDeleteFriendPreloader(false))
                dispatch(setFriendButtonPreloader(false))
                dispatch(setFriendStatus(null))
            }
        })
    }
}