import {  setNewLikedPostsId, updatePost } from "../store/profile-reducer";

export const createLike = (authUserId, currentId, postId, newLikesCount) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/api/createLike`, {
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
                dispatch(setNewLikedPostsId(response.data.newLikedPostsId))
                dispatch(updatePost(response.data.newPost))
            }
        })

    }
}