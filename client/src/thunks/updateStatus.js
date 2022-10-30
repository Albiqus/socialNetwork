import { setProfileStatus } from "../store/profile-reducer";

export const updateStatus = (id, status) => {
    return (dispatch) => {
        fetch("http://localhost:4000/api/status", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                id: id,
                status: status
            })
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            dispatch(setProfileStatus(response.data.status))
        })
    }
}