import {
    setNewComment,
    updatePost
} from "../../store/profile-reducer";

export const updateComment = (data, commentId, postId) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/api/updateComment?commentId=${commentId}&postId=${postId}`, {
            method: 'PUT',
            body: data
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.statusCode === 1) {
                dispatch(updatePost(response.data.updatedPost))
                dispatch(setNewComment(response.data.newComment))
            }
        })
    }
}

export const createComment = (postId, userId, avatarAverage, firstName, lastName, commentText, date, newCommentsCount, data, imageStatus) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/api/createComment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                postId,
                userId,
                avatarAverage,
                firstName,
                lastName,
                commentText,
                date,
                newCommentsCount,
                imageStatus
            })
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.statusCode === 1 && response.data.imageStatus) {
                dispatch(updateComment(data, response.data.newCommentId, response.data.postId))
            }
            if (response.statusCode === 1 && !response.data.imageStatus) {
                dispatch(updatePost(response.data.updatedPost))
                dispatch(setNewComment(response.data.newComment))
            }
        })
    }
}