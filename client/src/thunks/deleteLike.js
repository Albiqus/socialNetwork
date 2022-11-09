import {
    deleteLikedPostId,
    updatePost
} from "../store/profile-reducer";

export const deleteLike = (authUserId, currentId, postId, newLikesCount) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/api/deleteLike`, {
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
                dispatch(updatePost(response.data.newPost))
                dispatch(deleteLikedPostId(response.data.deletedlikedPostsId))
            }
        })

    }
}