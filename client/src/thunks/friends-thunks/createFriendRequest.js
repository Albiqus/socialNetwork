import {
    setFriendButtonPreloader, setFriendRequestStatus
} from "../../store/profile-reducer";

export const createFriendRequest = (newFriendId, ownerId, firstName, lastName, avatar, lastActivityTime, status) => {
    return (dispatch) => {
        dispatch(setFriendButtonPreloader(true))
        fetch(`http://localhost:4000/api/createFriendRequest`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                newFriendId,
                ownerId,
                firstName,
                lastName,
                avatar,
                lastActivityTime,
                status
            })
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.statusCode === 1) {
                dispatch(setFriendRequestStatus(true))
                dispatch((setFriendButtonPreloader(false)))
            }
        })

    }
}