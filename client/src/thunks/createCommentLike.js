import {
    setNewLikedCommentId,
    updateComment
} from "../store/profile-reducer";


export const createCommentLike = (authUserId, currentId, commentId, newLikesCount, postId, firstName, lastName, avatar) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/api/createCommentLike`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                authUserId,
                currentId,
                commentId,
                newLikesCount,
                firstName,
                lastName,
                avatar
            })
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            dispatch(setNewLikedCommentId(response.data.newLikedCommentId))
            dispatch(updateComment(response.data.updatedComment, postId))
        })

    }
}