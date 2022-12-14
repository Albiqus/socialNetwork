import {
    setFoundUsers,
    setIsNoUsers,
    setPagesCount,
    setSearchingStatus,
    setUsers
} from "../../store/users-reducer";


export const getDefiniteUsers = (searchValue) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/api/getDefiniteUsers?searchValue=${searchValue}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.statusCode === 1) {
                localStorage.setItem('pagesCount', Math.ceil(response.data.length / 10))
                dispatch(setPagesCount(Math.ceil(response.data.length / 10)))
                const newUsers = [];
                for (let i = 0; i < 10; i++) {
                    if (!response.data[i]) break
                    newUsers.push(response.data[i])
                }
                dispatch(setUsers(newUsers))
                dispatch(setFoundUsers(response.data))
                dispatch(setSearchingStatus(true))
            }
            if (response.statusCode === 0) {
                dispatch(setIsNoUsers(true))
                dispatch(setSearchingStatus(true))
            }
        })

    }
}