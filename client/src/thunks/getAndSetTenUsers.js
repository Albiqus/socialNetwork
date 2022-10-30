import {
    setIsNoUsers,
    setPagesCount,
    setUsers,
    setUsersPreloader
} from "../store/users-reducer";

export const getAndSetTenUsers = (currentPage) => {
    return (dispatch) => {
        dispatch(setUsersPreloader(true))
        fetch(`http://localhost:4000/api/users?page=${currentPage}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.statusCode === 0) {
                dispatch(setIsNoUsers(true))
                console.log('пользователей нет уёба')
            } else {
                localStorage.setItem('pagesCount', response.data.pagesCount)
                dispatch(setPagesCount(response.data.pagesCount))
                dispatch(setUsers(response.data.tenUsers))
            }
            dispatch(setUsersPreloader(false))
        })

    }
}