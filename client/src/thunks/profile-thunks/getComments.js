import {
    setComments,
    setCommentsPreloader
} from "../../store/profile-reducer";


export const getComments = (postId) => {
    return (dispatch) => {
        dispatch(setCommentsPreloader(true))
        fetch(`http://localhost:4000/api/getComments?postId=${postId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.statusCode === 1) {
                dispatch(setComments(response.data.comments, false))
            }
            if (response.statusCode === 0) {
                dispatch(setComments(response.data, true))
            }
            dispatch(setCommentsPreloader(false))
        })
    }
}