import {
    setSafetySectionPreloader,
    setSafetySettings
} from "../../store/settings-reducer";


export const getUserSafetySettings = (userId) => {
    return (dispatch) => {
        dispatch(setSafetySectionPreloader(true))
        fetch(`http://localhost:4000/api/getUserSafetySettings?userId=${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.statusCode === 1) {
                dispatch(setSafetySettings({
                    email: response.data.email,
                    newPassword: '',
                    secondNewPassword: '',
                    newSecretKey: '',
                    secondNewSecretKey: '',
                    currentPassword: '',
                }))
                dispatch(setSafetySectionPreloader(false))
            }
        })
    }
}