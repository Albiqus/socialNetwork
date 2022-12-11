import {
    setFriendsPreloader,
    setFriendsRequests
} from "../../store/friends-reducer";

export const getFriendsRequests = (id) => {
    return (dispatch) => {
        dispatch(setFriendsPreloader(true))
        fetch(`http://localhost:4000/api/getFriendsRequests?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.statusCode === 1) {
                dispatch(setFriendsRequests(response.data.friendsRequests))
            }
            if (response.statusCode === 0) {
                dispatch(setFriendsRequests(null))
            }
            dispatch(setFriendsPreloader(false))
        })
    }
}