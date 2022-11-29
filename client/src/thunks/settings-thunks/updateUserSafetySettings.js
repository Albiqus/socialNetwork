import {
    setExistingUserError,
    setInvalidPasswordError,
    setSafetySectionPreloader,
    setSuccessSafetyUpdate
} from "../../store/settings-reducer";



export const updateUserSafetySettings = (newEmail, newPassword, newSecretKey, currentPassword, userId) => {
    return (dispatch) => {
        dispatch(setSafetySectionPreloader(true))
        fetch("http://localhost:4000/api/updateUserSafetySettings", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                newEmail,
                newPassword,
                newSecretKey,
                currentPassword,
                userId
            })
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.statusCode === 0) {
                if (response.message === 'почтовый адрес занят') {
                    dispatch(setExistingUserError(response.message))
                }
                if (response.message === 'неправильный пароль') {
                    dispatch(setInvalidPasswordError(response.message))
                }
            }
            if (response.statusCode === 1) {
                dispatch(setSuccessSafetyUpdate(true))
            }
            dispatch(setSafetySectionPreloader(false))
        })
    }
}