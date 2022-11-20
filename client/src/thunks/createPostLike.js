import {
    setNewLikedPostsId,
    updatePost
} from "../store/profile-reducer";

export const createPostLike = (userId, authorId, postId, newLikesCount, firstName, lastName, avatar) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/api/createPostLike`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                userId,
                authorId,
                postId,
                newLikesCount,
                firstName,
                lastName,
                avatar
            })
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.statusCode === 1) {
                dispatch(setNewLikedPostsId(response.data.newLikedPostsId))
                dispatch(updatePost(response.data.updatedPost))
            }
        })

    }
}