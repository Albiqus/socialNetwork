const Router = require('express')
const router = new Router()
const userControllers = require('../controllers/user.controllers')

router.post('/register', userControllers.registerUser)
router.get('/users', userControllers.getUsers)

module.exports = router
