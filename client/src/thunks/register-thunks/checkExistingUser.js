import {
    setCurrentStep,
    setExistingUserError
} from "../../store/register-reducer";

export const checkExistingUser = (email) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/api/user?login=${email}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
            })
            .then(function (response) {
                return response.json();
            })
            .then(function (response) {
                if (response.statusCode === 1) {
                    dispatch(setExistingUserError(response.message))
                } else {
                    dispatch(setCurrentStep(2))
                }
            })
    }
}