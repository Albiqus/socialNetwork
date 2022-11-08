import {
    setInvalidAuthError,
    setLoginPreloader
} from "../store/login-reducer";
import { setNavVisible } from "../store/nav-reducer";

export const signIn = (login, password) => {
    return (dispatch) => {
        dispatch(setLoginPreloader(true))
        fetch(`http://localhost:4000/api/login?login=${login}&password=${password}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.statusCode === 1) {
                localStorage.setItem('id', response.data.id)
                dispatch(setNavVisible(true))
            }
            if (response.statusCode === 0) {
                dispatch(setInvalidAuthError(response.message))
            }
            dispatch(setLoginPreloader(false))
        })

    }
}