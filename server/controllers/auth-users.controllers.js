const db = require('../data-base')

class authUsersControllers {
    async getAuthUserLikes(req, res) {
        const authUserId = req.query.authUserId
        const currentUserId = req.query.currentUserId

        const userPostsLikesResult = await db.query(`SELECT * FROM posts_likes WHERE user_id=$1 AND author_id=$2`, [authUserId, currentUserId])
        const likedPostsIds = userPostsLikesResult.rows.map((like) => {
            return like.post_id
        })

        const userCommentsLikesResult = await db.query(`SELECT * FROM comments_likes WHERE user_id=$1 AND author_id=$2`, [authUserId, currentUserId])
        const likedCommentsIds = userCommentsLikesResult.rows.map((like) => {
            return like.comment_id
        })

        res.json({
            statusCode: 1,
            message: 'Отдаю лайки пользователя',
            data: {
                likedPostsIds,
                likedCommentsIds
            }
        })
    }
    async getAuthUserData(req, res) {
        const authUserId = req.query.authUserId

        const authUserResult = await db.query(`SELECT * FROM users WHERE id=$1`, [authUserId])

        if (authUserResult.rows.length === 0) {
            res.json({
                statusCode: 0,
                message: 'Пользователь не найден',
            })
        }
        if (authUserResult.rows.length !== 0) {
            res.json({
                statusCode: 1,
                message: 'Отдаю данные залогиненного пользователя',
                data: {
                    firstName: authUserResult.rows[0].first_name,
                    lastName: authUserResult.rows[0].last_name,
                    avatar: authUserResult.rows[0].avatar,
                    lastActivityTime: authUserResult.rows[0].last_activity_time
                }
            })
        }
    }
}
module.exports = new authUsersControllers()