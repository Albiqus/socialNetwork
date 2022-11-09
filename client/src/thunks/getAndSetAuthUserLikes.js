import {
    setLikedPostsIds
} from "../store/profile-reducer";

export const getAndSetAuthUserLikes = (authUserId, currentUserId) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/api/getAuthUserLikes/?authUserId=${authUserId}&currentUserId=${currentUserId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            dispatch(setLikedPostsIds(response.data.likedPostsIds))
        })

    }
}
