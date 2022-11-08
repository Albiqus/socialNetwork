const Router = require('express')

const CommentsControllers = require('../controllers/comments.controllers')
const commentsRouter = new Router()

commentsRouter.post('/createComment', CommentsControllers.createComment) // создай новый комментарий


module.exports = commentsRouter
