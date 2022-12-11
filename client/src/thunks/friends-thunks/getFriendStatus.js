import { setFriendStatus } from "../../store/profile-reducer";


export const getFriendStatus = (friendId, ownerId) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/api/getFriendStatus?friendId=${friendId}&ownerId=${ownerId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.statusCode === 0) {
                dispatch(setFriendStatus(false))
            }
            if (response.statusCode === 1) {
                dispatch(setFriendStatus(true))
            }
        })
    }
}