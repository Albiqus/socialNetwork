const db = require('../data-base')

class PostsControllers {

    async getAllPosts(req, res) {
        const posts = await db.query(`SELECT * FROM posts`)
        res.json(posts.rows)
    }

    async getPosts(req, res) {
        const userId = req.query.userId
        const postResult = await db.query(`SELECT * FROM posts WHERE user_id=$1`, [userId])

        const posts = postResult.rows.reverse().map((post) => {
            return {
                id: post.id,
                userId: post.user_id,
                postText: post.post_text,
                postImage: post.image,
                date: post.date
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

    async updatePost(req, res) {
        const userId = req.query.userId
        const postId = req.query.postId
        const postImage = `http://localhost:4000/images/${req.file.filename}`

        await db.query('UPDATE posts set image=$1 WHERE user_id=$2 AND id=$3 RETURNING *', [postImage, userId, postId])

        const postsResult = await db.query(`SELECT * FROM posts WHERE user_id=$1`, [userId])

        const posts = postsResult.rows.reverse().map((post) => {
            return {
                id: post.id,
                userId: post.user_id,
                postText: post.post_text,
                postImage: post.image,
                date: post.date
            }
        })
        res.json({
            statusCode: 1,
            message: 'Пост создан',
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

        const newPost = await db.query('INSERT INTO posts (user_id, post_text, image, date) values ($1, $2, $3, $4) RETURNING *', [userId, postText, postImage, date])
        const newPostId = newPost.rows[0].id

        const postsResult = await db.query(`SELECT * FROM posts WHERE user_id=$1`, [userId])
        const posts = postsResult.rows.reverse().map((post) => {
            return {
                id: post.id,
                userId: post.user_id,
                postText: post.post_text,
                postImage: post.image,
                date: post.date
            }
        })

        if (imageStatus === 0) {
            res.json({
                statusCode: 1,
                message: 'Пост создан',
                data: {
                    posts: posts
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

    async deletePost(req, res) {
        const userId = req.query.userId
        const postId = req.query.postId

        const postResult = await db.query(`DELETE FROM posts WHERE user_id=$1 AND id=$2`, [userId, postId])

        const postsResult = await db.query(`SELECT * FROM posts WHERE user_id=$1`, [userId])

        const posts = postsResult.rows.reverse().map((post) => {
            return {
                id: post.id,
                userId: post.user_id,
                postText: post.post_text,
                postImage: post.image,
                date: post.date
            }
        })
        res.json({
            statusCode: 1,
            message: 'Пост удалён',
            data: {
                posts: posts
            }
        })
    }

}
module.exports = new PostsControllers()