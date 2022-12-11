import {
    setFriends,
    setFriendsPreloader
} from "../../store/friends-reducer";


export const getFriends = (id) => {
    return (dispatch) => {
        dispatch(setFriendsPreloader(true))
        fetch(`http://localhost:4000/api/getFriends?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.statusCode === 1) {
                dispatch(setFriends(response.data))
            }
            dispatch(setFriendsPreloader(false))
        })
    }
}