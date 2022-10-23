import { setIsAuth } from "../store/auth-reducer";
import { setInvalidAuthError, setPreloader } from "../store/login-reducer";

export const signIn = (login, password) => {
    return (dispatch) => {
        dispatch(setPreloader(true))
        fetch(`http://localhost:4000/api/login?login=${login}&password=${password}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.statusCode === 1) {
                dispatch(setIsAuth(true))
                dispatch(setPreloader(false))
            }
            if (response.statusCode === 0) {
                dispatch(setInvalidAuthError(response.message))
                dispatch(setPreloader(false))
            }
        })

    }
}