import { setSuccessUserDeleteStatus } from "../../store/login-reducer";
import {
    setNavVisible
} from "../../store/nav-reducer";
import {
    setInvalidPasswordError,
    setSafetySectionPreloader
} from "../../store/settings-reducer";
import { resetUsersSettings } from "../../store/users-reducer";

export const deleteUser = (userId, password) => {
    return (dispatch) => {
        dispatch(setSafetySectionPreloader(true))
        fetch(`http://localhost:4000/api/deleteUser?userId=${userId}&password=${password}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.statusCode === 0) {
                dispatch(setInvalidPasswordError(response.message))
            }
            if (response.statusCode === 1) {
                dispatch(setSuccessUserDeleteStatus(true))
                localStorage.clear()
                dispatch(setNavVisible(false))
                dispatch(resetUsersSettings())
            }
            dispatch(setSafetySectionPreloader(false))
        })
    }
}