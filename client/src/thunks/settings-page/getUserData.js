import { setDataSectionPreloader, setDataSettings } from "../../store/settings-reducer";

export const getUserData = (userId) => {
    return (dispatch) => {
        dispatch(setDataSectionPreloader(true))
        fetch(`http://localhost:4000/api/getUserData?userId=${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.statusCode === 1) {
                dispatch(setDataSettings(response.data))
                dispatch(setDataSectionPreloader(false))
            }
        })
    }
}