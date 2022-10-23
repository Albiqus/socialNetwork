export const signIn = (login, password) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/api/login?login=${login}&password=${password}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            console.log(response)
        })

    }
}