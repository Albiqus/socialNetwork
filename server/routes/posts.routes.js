const Router = require('express')
const postsControllers = require('../controllers/posts.controllers')
const fileMiddleware = require('../middleware/file')

const postsRouter = new Router()

postsRouter.post('/createPost', postsControllers.createPost) //создай новый пост без фотки
postsRouter.put('/updatePost', fileMiddleware.single('postImage'), postsControllers.updatePost) //создай новый пост с фоткой
postsRouter.delete('/deletePost', postsControllers.deletePost) //удали 1 пост
postsRouter.get('/getPosts', postsControllers.getPosts) // дай посты конкретного пользователя
postsRouter.post('/createLike', postsControllers.createLike) //добавь 1 лайк к посту
postsRouter.post('/deleteLike', postsControllers.deleteLike) //удали 1 лайк у поста

postsRouter.get('/getAllPosts', postsControllers.getAllPosts) //дай все посты


module.exports = postsRouter


