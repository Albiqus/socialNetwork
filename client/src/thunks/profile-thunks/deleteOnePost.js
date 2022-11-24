import {
    deletePost,
    setDeletePostPreloader,
} from "../../store/profile-reducer";

export const deleteOnePost = (userId, postId) => {
    return (dispatch) => {
        dispatch(setDeletePostPreloader(true, postId))
        fetch(`http://localhost:4000/api/deletePost?userId=${userId}&postId=${postId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.statusCode === 1) {
                dispatch(deletePost(response.data.postId))
            }
            dispatch(setDeletePostPreloader(false, null))
        })
    }
}