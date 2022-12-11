const Router = require('express')
const friendsControllers = require('../controllers/friends.controller')

const friendsRouter = new Router()

friendsRouter.post('/createFriendRequest', friendsControllers.createFriendRequest) //создай новую заявку в друзья
friendsRouter.get('/getFriendRequestStatus', friendsControllers.getFriendRequestStatus) //дай статус заявки в друзья
friendsRouter.delete('/deleteFriendRequest', friendsControllers.deleteFriendRequest) //дай статус заявки в друзья
friendsRouter.get('/getFriendsRequests', friendsControllers.getFriendsRequests) //дай все заявки в друзья

friendsRouter.delete('/deleteFriend', friendsControllers.deleteFriend) //добавь друга
friendsRouter.post('/addFriend', friendsControllers.addFriend) //добавь друга
friendsRouter.get('/getFriends', friendsControllers.getFriends) //дай всех друзей
friendsRouter.get('/getFriendStatus', friendsControllers.getFriendStatus) //дай статус друга






module.exports = friendsRouter
