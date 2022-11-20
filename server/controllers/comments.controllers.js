const db = require('../data-base')
const {
    formatComments,
    formatPosts,
    sortComments
} = require('../utils')

class commentsControllers {
    async createComment(req, res) {

        const postId = req.body.postId
        const userId = req.body.userId
        const avatarAverage = req.body.avatarAverage
        const firstName = req.body.firstName
        const lastName = req.body.lastName
        const commentText = req.body.commentText
        const date = req.body.date
        const newCommentsCount = req.body.newCommentsCount
        const image = null
        const imageStatus = req.body.imageStatus
        const likesCount = 0

        const updatedPostResult = await db.query('UPDATE posts set comments_count=$1 WHERE id=$2 RETURNING *', [newCommentsCount, postId])
        const newCommentResult = await db.query('INSERT INTO comments (post_id, user_id, avatar, first_name, last_name, text, date, image, likes_count) values ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
            [
                postId,
                userId,
                avatarAverage,
                firstName,
                lastName,
                commentText,
                date,
                image,
                likesCount
            ])
        const newCommentId = newCommentResult.rows[0].id
        const newComment = formatComments(newCommentResult.rows)[0]
        const updatedPost = formatPosts(updatedPostResult.rows)[0]

        if (imageStatus === 0) {
            res.json({
                statusCode: 1,
                message: 'Комментарий успешно добавлен',
                data: {
                    newComment,
                    updatedPost
                }
            })
        } else {
            res.json({
                statusCode: 1,
                message: 'Комментарий создан, готов к обновлению',
                data: {
                    imageStatus: 1,
                    newCommentId,
                    postId
                }
            })
        }


    }
    async updateComment(req, res) {
        const commentId = req.query.commentId
        const postId = req.query.postId
        const image = `http://localhost:4000/images/${req.file.filename}`

        const newCommentResult = await db.query('UPDATE comments set image=$1 WHERE id=$2 RETURNING *', [image, commentId])
        const updatedPostResult = await db.query('SELECT * FROM posts WHERE id=$1', [postId])

        const newComment = formatComments(newCommentResult.rows)[0]
        const updatedPost = formatPosts(updatedPostResult.rows)[0]

        res.json({
            statusCode: 1,
            message: 'Комментарий создан',
            data: {
                newComment,
                updatedPost
            }
        })
    }

    async deleteComment(req, res) {
        const postId = req.query.postId
        const commentId = req.query.commentId
        const newCommentsCount = req.query.newCommentsCount

        const updatedPostResult = await db.query('UPDATE posts set comments_count=$1 WHERE id=$2 RETURNING *', [newCommentsCount, postId])
        await db.query(`DELETE FROM comments WHERE id=$1`, [commentId])

        const updatedPost = formatPosts(updatedPostResult.rows)[0]

        res.json({
            statusCode: 1,
            message: 'Комментарий удалён',
            data: {
                commentId,
                postId,
                updatedPost
            }
        })

    }

    async getComments(req, res) {
        const postId = req.query.postId
        const commentsResult = await db.query('SELECT * FROM comments WHERE post_id = $1', [postId])
        const comments = sortComments(formatComments(commentsResult.rows))

        if (comments.length === 0) {
            res.json({
                statusCode: 0,
                message: `Под постом id = ${postId} нет комментариев`,
                data: {
                    postId
                }
            })
        }
        if (comments.length > 0) {
            res.json({
                statusCode: 1,
                message: `Отдаю комментарии поста id = ${postId}`,
                data: {
                    comments
                }
            })
        }
    }
    async createCommentLike(req, res) {
        const authUserId = req.body.authUserId
        const currentId = req.body.currentId
        const commentId = req.body.commentId
        const newLikesCount = req.body.newLikesCount
        const firstName = req.body.firstName
        const lastName = req.body.lastName
        const avatar = req.body.avatar


        const updatedCommentResult = await db.query('UPDATE comments set likes_count=$1 WHERE id=$2 RETURNING *', [newLikesCount, commentId])
        const updatedComment = formatComments(updatedCommentResult.rows)[0]

        const userLikesResult = await db.query(`INSERT INTO comments_likes (user_id, author_id, comment_id, first_name, last_name, avatar) values ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [authUserId, currentId, commentId, firstName, lastName, avatar])
        const newLikedCommentId = userLikesResult.rows[0].comment_id

        res.json({
            statusCode: 1,
            message: 'Отдаю обновлённый комментарий',
            data: {
                updatedComment,
                newLikedCommentId
            }
        })
    }

    async deleteCommentLike(req, res) {
        const authUserId = req.body.authUserId
        const currentId = req.body.currentId
        const commentId = req.body.commentId
        const newLikesCount = req.body.newLikesCount
        
        const updatedCommentResult = await db.query('UPDATE comments set likes_count=$1 WHERE id=$2 RETURNING *', [newLikesCount, commentId])
        const updatedComment = formatComments(updatedCommentResult.rows)[0]

        await db.query(`DELETE FROM comments_likes WHERE user_id=$1 AND author_id=$2 AND comment_id=$3`, [authUserId, currentId, commentId])

        res.json({
            statusCode: 1,
            message: 'Отдаю обновлённый комментарий',
            data: {
                updatedComment,
                deletedLikedCommentId: commentId
            }
        })
    }
}
module.exports = new commentsControllers()