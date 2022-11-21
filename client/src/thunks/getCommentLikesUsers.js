import { setCommentLikesUsers } from "../store/profile-reducer"

export const getCommentLikesUsers = (commentId) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/api/getCommentLikesUsers?commentId=${commentId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.statusCode === 1) {
                dispatch(setCommentLikesUsers(response.data.commentLikesUsers))
            }
        })
    }
}