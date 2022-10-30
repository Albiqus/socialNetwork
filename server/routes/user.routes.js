const Router = require('express')
const router = new Router()
const userControllers = require('../controllers/user.controllers')

router.get('/user', userControllers.getOneUser) //1 пользователь
router.get('/users', userControllers.getTenUsers) //10 пользователей
router.post('/register', userControllers.registerUser) //зарегистрируйся
router.get('/login', userControllers.login) //логинизируйся
router.get('/profile', userControllers.getProfileData) //дай данные профиля
router.put('/status', userControllers.setUserStatus) //обнови статус пользователя

router.get('/postman', userControllers.getAllUsers) //дай всех пользователей
module.exports = router
