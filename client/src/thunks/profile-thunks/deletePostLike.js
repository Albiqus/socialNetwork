import {
    deleteLikedPostId,
    updatePost
} from "../../store/profile-reducer";

export const deletePostLike = (authUserId, currentId, postId, newLikesCount) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/api/deletePostLike`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                authUserId,
                currentId,
                postId,
                newLikesCount
            })
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.statusCode === 1) {
                dispatch(updatePost(response.data.updatedPost))
                dispatch(deleteLikedPostId(response.data.deletedlikedPostsId))
            }
        })

    }
}