import {
    setIsPostCreation,
    setNewPost,
    setNewPostPreloader
} from "../store/profile-reducer";

export const updatePost = (data, userId, postId) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/api/updatePost?userId=${userId}&postId=${postId}`, {
            method: 'PUT',
            body: data
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.statusCode === 1) {
                 dispatch(setNewPost(response.data.newPost))
            }
            dispatch(setNewPostPreloader(false))
            dispatch(setIsPostCreation(false))
        })
    }
}

export const createPost = (userId, postText, data, date, imageStatus) => {
    return (dispatch) => {
        dispatch(setNewPostPreloader(true))
        fetch(`http://localhost:4000/api/createPost`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                userId,
                postText,
                date,
                imageStatus
            })
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.statusCode === 1 && response.data.imageStatus) {
                dispatch(updatePost(data, userId, response.data.postId))
            }
            if (response.statusCode === 1 && !response.data.imageStatus) {
                dispatch(setNewPost(response.data.newPost))
                dispatch(setNewPostPreloader(false))
                dispatch(setIsPostCreation(false))
            }
        })
    }
}