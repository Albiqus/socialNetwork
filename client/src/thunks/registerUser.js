import {
    setCurrentStep,
    setRegisterPreloader,
    setSuccessRegistrationStatus
} from "../store/register-reducer";

export const registerUser = (userData) => {
    return (dispatch) => {
        dispatch(setRegisterPreloader(true))
        fetch("http://localhost:4000/api/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(userData)
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.statusCode === 1) {
                dispatch(setSuccessRegistrationStatus(true))
            }
            dispatch(setRegisterPreloader(false))
            dispatch(setCurrentStep(1))
        })
    }
}