const Router = require('express')
const usersControllers = require('../controllers/users.controllers')
const fileMiddleware = require('../middleware/file')

const usersRouter = new Router()

usersRouter.get('/user', usersControllers.getOneUser) //1 пользователь
usersRouter.get('/users', usersControllers.getTenUsers) //10 пользователей
usersRouter.post('/register', usersControllers.registerUser) //зарегистрируйся
usersRouter.get('/login', usersControllers.login) //логинизируйся
usersRouter.get('/profile', usersControllers.getProfileData) //дай данные профиля
usersRouter.put('/status', usersControllers.setUserStatus) //обнови статус пользователя
usersRouter.post('/uploadAvatar', fileMiddleware.single('avatar'), usersControllers.uploadAvatar) //обнови аватар пользователя

usersRouter.get('/postman', usersControllers.getAllUsers) //дай всех пользователей

module.exports = usersRouter


