import {
    deleteComment,
    updatePost
} from "../../store/profile-reducer";

export const deleteOneComment = (postId, commentId, newCommentsCount) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/api/deleteComment?postId=${postId}&commentId=${commentId}&newCommentsCount=${newCommentsCount}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.statusCode === 1) {
                dispatch(updatePost(response.data.updatedPost))
                dispatch(deleteComment(response.data.commentId, response.data.postId))
            }

        })
    }
}