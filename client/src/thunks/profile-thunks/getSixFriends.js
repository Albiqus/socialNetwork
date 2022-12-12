import { setFriends, setFriendsCount, setProfilePreloader } from "../../store/profile-reducer";



export const getSixFriends = (id) => {
    return (dispatch) => {
        dispatch(setProfilePreloader(true))
        fetch(`http://localhost:4000/api/getSixFriends?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.statusCode === 1) {
                dispatch(setFriends(response.data.friends))
                dispatch(setFriendsCount(response.data.friendsCount))
            }
            dispatch(setProfilePreloader(false))
        })
    }
}