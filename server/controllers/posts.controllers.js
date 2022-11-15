const db = require('../data-base')
const {
    sortPosts,
    formatPosts
} = require('../utils')

class PostsControllers {

    async getAllPosts(req, res) {
        const posts = await db.query(`SELECT * FROM posts`)
        res.json(posts.rows)
    }

    async getPosts(req, res) {
        const userId = req.query.userId
        const postsResult = await db.query(`SELECT * FROM posts WHERE user_id=$1`, [userId])

        const posts = formatPosts(sortPosts(postsResult.rows))
  
        res.json({
            statusCode: 1,
            message: 'Отдаю все посты',
            data: {
                posts: posts
            }
        })
    }

    async createPost(req, res) {
        const userId = req.body.userId
        const text = req.body.postText
        const image = null
        const date = req.body.date
        const imageStatus = req.body.imageStatus
        const likesCount = 0
        const commentsCount = 0

        const newPostResult = await db.query('INSERT INTO posts (user_id, text, image, date, likes_count, comments_count) values ($1, $2, $3, $4, $5, $6) RETURNING *', [userId, text, image, date, likesCount, commentsCount])
        const newPostId = newPostResult.rows[0].id

        const newPost = formatPosts(newPostResult.rows)[0]


        if (imageStatus === 0) {
            res.json({
                statusCode: 1,
                message: 'Пост создан',
                data: {
                    newPost
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
        const newPost = formatPosts(newPostResult.rows)[0]


        res.json({
            statusCode: 1,
            message: 'Пост создан',
            data: {
                newPost
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

    async createPostLike(req, res) {
        const authUserId = req.body.authUserId
        const currentId = req.body.currentId
        const postId = req.body.postId
        const newLikesCount = req.body.newLikesCount

        const updatedPostResult = await db.query('UPDATE posts set likes_count=$1 WHERE id=$2 RETURNING *', [newLikesCount, postId])
        const updatedPost = formatPosts(updatedPostResult.rows)[0]

        const userLikesResult = await db.query(`INSERT INTO user_posts_likes (auth_user_id, user_id, post_id) values ($1, $2, $3) RETURNING *`, [authUserId, currentId, postId])
        const newLikedPostsId = userLikesResult.rows[0].post_id


        res.json({
            statusCode: 1,
            message: 'Отдаю обновлённый пост',
            data: {
                updatedPost,
                newLikedPostsId
            }
        })
    }

    async deletePostLike(req, res) {
        const authUserId = req.body.authUserId
        const currentId = req.body.currentId
        const postId = req.body.postId
        const newLikesCount = req.body.newLikesCount

        const updatedPostResult = await db.query('UPDATE posts set likes_count=$1 WHERE id=$2 RETURNING *', [newLikesCount, postId])
        const updatedPost = formatPosts(updatedPostResult.rows)[0]

        await db.query(`DELETE FROM user_posts_likes WHERE auth_user_id=$1 AND user_id=$2 AND post_id=$3`, [authUserId, currentId, postId])


        res.json({
            statusCode: 1,
            message: 'Отдаю обновлённый пост',
            data: {
                updatedPost,
                deletedlikedPostsId: postId
            }
        })
    }

}
module.exports = new PostsControllers()