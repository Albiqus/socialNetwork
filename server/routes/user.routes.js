const Router = require('express')
const router = new Router()
const userControllers = require('../controllers/user.controllers')

router.get('/user', userControllers.getOneUser) //дай одного пользователя
router.post('/register', userControllers.registerUser) //зарегистрируйся
router.get('/login', userControllers.login) //логинизируйся

router.get('/users', userControllers.getUsers) //дай всех пользователей
module.exports = router
