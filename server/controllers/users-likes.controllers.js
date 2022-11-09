const db = require('../data-base')

class UsersLikesControllers {
    async getAuthUserLikes(req, res) {
        const authUserId = req.query.authUserId
        const currentUserId = req.query.currentUserId

        const userLikesResult = await db.query(`SELECT * FROM users_likes WHERE auth_user_id=$1 AND user_id=$2`, [authUserId, currentUserId])
        const likedPostsIds = userLikesResult.rows.map((posts) => {
            return posts.post_id
        })

        res.json({
            statusCode: 1,
            message: 'Отдаю лайки пользователя',
            data: {
                likedPostsIds
            }
        })
    }
}
module.exports = new UsersLikesControllers()