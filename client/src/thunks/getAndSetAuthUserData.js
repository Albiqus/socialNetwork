import { setAuthUserData } from "../store/auth-user-reducer";


export const getAndSetAuthUserData = (authUserId) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/api/getAuthUserData/?authUserId=${authUserId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.statusCode === 1) {
                dispatch(setAuthUserData(response.data))
            }
        })

    }
}
