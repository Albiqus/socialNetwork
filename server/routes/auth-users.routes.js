const Router = require('express')

const authUserControllers = require('../controllers/auth-users.controllers')
const authUserRouter = new Router()

authUserRouter.get('/getAuthUserLikes', authUserControllers.getAuthUserLikes) //дай лайки залогиненного пользователя на конкретной странице
authUserRouter.get('/getAuthUserData', authUserControllers.getAuthUserData) //дай данные залогиненного пользователя

module.exports = authUserRouter