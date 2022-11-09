import { setProfileAvatarAverage } from "../store/profile-reducer";

export const setAvatar = (data, id) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/api/uploadAvatar?userId=${id}`, {
            method: 'POST',
            body: data
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            dispatch(setProfileAvatarAverage(response.data.avatarAverage))
        })
    }
}

