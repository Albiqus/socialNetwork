const db = require('../data-base')
const {
    sortPosts
} = require('../utils')

class PostsControllers {

    async getAllPosts(req, res) {
        const posts = await db.query(`SELECT * FROM posts`)
        res.json(posts.rows)
    }

    async getPosts(req, res) {
        const userId = req.query.userId
        const postsResult = await db.query(`SELECT * FROM posts WHERE user_id=$1`, [userId])


        const posts = sortPosts(postsResult.rows).map((post) => {
            return {
                id: post.id,
                userId: post.user_id,
                postText: post.post_text,
                postImage: post.image,
                date: post.date,
                likes: post.likes
            }
        })

        res.json({
            statusCode: 1,
            message: 'Отдаю посты',
            data: {
                posts: posts
            }
        })
    }

    async createPost(req, res) {
        const userId = req.body.userId
        const postText = req.body.postText
        const postImage = null
        const date = req.body.date
        const imageStatus = req.body.imageStatus
        const likes = 0

        const newPostResult = await db.query('INSERT INTO posts (user_id, post_text, image, date, likes) values ($1, $2, $3, $4, $5) RETURNING *', [userId, postText, postImage, date, likes])
        const newPostId = newPostResult.rows[0].id

        if (imageStatus === 0) {
            res.json({
                statusCode: 1,
                message: 'Пост создан',
                data: {
                    newPost: {
                        id: newPostResult.rows[0].id,
                        userId: newPostResult.rows[0].user_id,
                        postText: newPostResult.rows[0].post_text,
                        postImage: newPostResult.rows[0].image,
                        date: newPostResult.rows[0].date,
                        likes: newPostResult.rows[0].likes,
                    }
                }
            })
        } else {
            res.json({
                statusCode: 1,
                message: 'Пост создан, готов к обновлению',
                data: {
                    imageStatus: 1,
                    postId: newPostId
                }
            })
        }
    }

    async updatePost(req, res) {
        const userId = req.query.userId
        const postId = req.query.postId
        const postImage = `http://localhost:4000/images/${req.file.filename}`

        const newPostResult = await db.query('UPDATE posts set image=$1 WHERE user_id=$2 AND id=$3 RETURNING *', [postImage, userId, postId])


        res.json({
            statusCode: 1,
            message: 'Пост создан',
            data: {
                newPost: {
                    id: newPostResult.rows[0].id,
                    userId: newPostResult.rows[0].user_id,
                    postText: newPostResult.rows[0].post_text,
                    postImage: newPostResult.rows[0].image,
                    date: newPostResult.rows[0].date,
                    likes: newPostResult.rows[0].likes,
                }
            }
        })
    }

    async deletePost(req, res) {
        const userId = req.query.userId
        const postId = req.query.postId

        await db.query(`DELETE FROM posts WHERE user_id=$1 AND id=$2`, [userId, postId])

        res.json({
            statusCode: 1,
            message: 'Пост удалён',
            data: {
                postId
            }
        })
    }

    async createLike(req, res) {
        const authUserId = req.body.authUserId
        const currentId = req.body.currentId
        const postId = req.body.postId
        const newLikesCount = req.body.newLikesCount

        const updatedPostResult = await db.query('UPDATE posts set likes=$1 WHERE id=$2 RETURNING *', [newLikesCount, postId])

        const userLikesResult = await db.query(`INSERT INTO users_likes (auth_user_id, user_id, post_id) values ($1, $2, $3) RETURNING *`, [authUserId, currentId, postId])
        const newLikedPostsId = userLikesResult.rows[0].post_id

        res.json({
            statusCode: 1,
            message: 'Отдаю обновлённый пост',
            data: {
                newPost: {
                    id: updatedPostResult.rows[0].id,
                    userId: updatedPostResult.rows[0].user_id,
                    postText: updatedPostResult.rows[0].post_text,
                    postImage: updatedPostResult.rows[0].image,
                    date: updatedPostResult.rows[0].date,
                    likes: updatedPostResult.rows[0].likes,
                },
                newLikedPostsId
            }
        })
    }

    async deleteLike(req, res) {
        const authUserId = req.body.authUserId
        const currentId = req.body.currentId
        const postId = req.body.postId
        const newLikesCount = req.body.newLikesCount

        const updatedPostResult = await db.query('UPDATE posts set likes=$1 WHERE id=$2 RETURNING *', [newLikesCount, postId])

        await db.query(`DELETE FROM users_likes WHERE auth_user_id=$1 AND user_id=$2 AND post_id=$3`, [authUserId, currentId, postId])

        res.json({
            statusCode: 1,
            message: 'Отдаю посты',
            data: {
                newPost: {
                    id: updatedPostResult.rows[0].id,
                    userId: updatedPostResult.rows[0].user_id,
                    postText: updatedPostResult.rows[0].post_text,
                    postImage: updatedPostResult.rows[0].image,
                    date: updatedPostResult.rows[0].date,
                    likes: updatedPostResult.rows[0].likes,
                },
                deletedlikedPostsId: postId
            }
        })
    }

}
module.exports = new PostsControllers()