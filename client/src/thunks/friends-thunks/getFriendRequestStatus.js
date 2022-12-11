import {
    setFriendRequestStatus
} from "../../store/profile-reducer";

export const getFriendRequestStatus = (newFriendId, ownerId) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/api/getFriendRequestStatus?newFriendId=${newFriendId}&ownerId=${ownerId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.statusCode === 0) {
                dispatch(setFriendRequestStatus(false))
            }
            if (response.statusCode === 1) {
                dispatch(setFriendRequestStatus(true))
            }
        })
    }
}