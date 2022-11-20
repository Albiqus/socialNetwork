import { setPostLikesUsers } from "../store/profile-reducer";


export const getPostLikesUsers = (postId) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/api/getPostLikesUsers?postId=${postId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.statusCode === 1) {
                dispatch(setPostLikesUsers(response.data.postLikesUsers))
            }
        })
    }
}