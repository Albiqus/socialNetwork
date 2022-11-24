import { setPosts } from "../../store/profile-reducer";


export const getPosts = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/api/getPosts?userId=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response.statusCode === 1) {
                dispatch(setPosts(response.data.posts))
            }
        })
    }
}