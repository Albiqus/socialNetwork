import { setProfileData, setProfileError, setProfilePreloader } from "../../store/profile-reducer";


export const getProfileData = (userId) => {
    return (dispatch) => {
        dispatch(setProfilePreloader(true))
        fetch(`http://localhost:4000/api/profile?userId=${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.statusCode === 1) {
                dispatch(setProfileData(response.profileData))
            }
            if (response.statusCode === 0) {
                dispatch(setProfileError(response.message))
            }
            dispatch(setProfilePreloader(false))
        })
    }
}