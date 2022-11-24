import { setDataSectionPreloader, setSuccessDataUpdate } from "../../store/settings-reducer";

export const updateUserData = (userId, firstName, lastName, country, city, phone, dateOfBirth, gender, maritalStatus) => {
    return (dispatch) => {
        dispatch(setDataSectionPreloader(true))
        fetch("http://localhost:4000/api/updateUserData", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                userId,
                firstName,
                lastName,
                country,
                city,
                phone,
                dateOfBirth,
                gender,
                maritalStatus
            })
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.statusCode === 1) {
                dispatch(setDataSectionPreloader(false))
                dispatch(setSuccessDataUpdate(true))
            }
        })
    }
}