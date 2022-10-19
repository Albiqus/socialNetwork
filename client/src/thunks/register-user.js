export const registerUser = (userData) => {
    return (dispatch) => {
        fetch("http://localhost:4000/api/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(userData)
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            console.log(response)
            // dispatch(setNickName(response.nick_name))
            // dispatch(setUserId(response.id))
        })

    }
}