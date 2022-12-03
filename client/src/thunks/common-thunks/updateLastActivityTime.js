import { getCurrentTime } from "../../utils/common-utils/getCurrentTime";

export const updateLastActivityTime = (userId) => {
    const time = getCurrentTime()
    return (dispatch) => {
        fetch("http://localhost:4000/api/updateLastActivityTime", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                userId,
                time
            })
        })
    }
}