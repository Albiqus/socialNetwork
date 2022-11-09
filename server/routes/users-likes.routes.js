const Router = require('express')
const UsersLikesControllers = require('../controllers/users-likes.controllers')

const usersLikesRouter = new Router()

usersLikesRouter.get('/getAuthUserLikes', UsersLikesControllers.getAuthUserLikes) //дай лайки залогининого пользователя на конкретной странице

module.exports = usersLikesRouter