const Router = require('express')
const commentsControllers = require('../controllers/comments.controllers')
const fileMiddleware = require('../middleware/file')

const commentsRouter = new Router()

commentsRouter.post('/createComment', commentsControllers.createComment) // создай новый комментарий без изображения
commentsRouter.put('/updateComment', fileMiddleware.single('commentImage'), commentsControllers.updateComment) //создай новый комментарий с изображением
commentsRouter.delete('/deleteComment', commentsControllers.deleteComment) // удали комментарий
commentsRouter.get('/getComments', commentsControllers.getComments) // дай комменты определённого поста

commentsRouter.post('/createCommentLike', commentsControllers.createCommentLike) //добавь 1 лайк к комменту
commentsRouter.post('/deleteCommentLike', commentsControllers.deleteCommentLike) //удали 1 лайк у коммента

module.exports = commentsRouter
