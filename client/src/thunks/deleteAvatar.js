import { setProfileAvatar } from "../store/profile-reducer";

export const deleteAvatar = (userId) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/api/deleteAvatar?userId=${userId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.statusCode === 1) {
                dispatch(setProfileAvatar(response.data.avatar))
            }
        })
    }
}