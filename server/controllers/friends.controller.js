const db = require('../data-base')
const {
    sortFriendsRequests,
    formatFriendsRequests,
    formatFriends,
    sortFriends
} = require('../utils')

class friendsControllers {
    async createFriendRequest(req, res) {
        const newFriendId = req.body.newFriendId
        const ownerId = req.body.ownerId
        const firstName = req.body.firstName
        const lastName = req.body.lastName
        const avatar = req.body.avatar
        const lastActivityTime = req.body.lastActivityTime
        const status = req.body.status

        const newFriendRequestResult = await db.query('INSERT INTO friends_requests (owner_id, new_friend_id, first_name, last_name, avatar, last_activity_time, status) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [ownerId, newFriendId, firstName, lastName, avatar, lastActivityTime, status])

        if (newFriendRequestResult.rows.length === 1) {
            res.json({
                statusCode: 1,
                message: `Заявка в друзья отправлена`,
            })
        }
    }
    async deleteFriendRequest(req, res) {
        const newFriendId = req.query.newFriendId
        const ownerId = req.query.ownerId

        const deletedFriendRequestResult = await db.query(`DELETE FROM friends_requests WHERE owner_id=$1 AND new_friend_id=$2`, [ownerId, newFriendId])


        const friendsRequestsResult = await db.query(`SELECT * FROM friends_requests WHERE owner_id=$1`, [ownerId])
        const friendsRequestsCount = friendsRequestsResult.rows.length > 0 && friendsRequestsResult.rows.length

        if (deletedFriendRequestResult.rows.length === 0) {
            res.json({
                statusCode: 1,
                message: `Заявка в друзья удалена`,
                data: {
                    newFriendId,
                    friendsRequestsCount
                }
            })
        }
    }
    async getFriendRequestStatus(req, res) {
        const newFriendId = req.query.newFriendId
        const ownerId = req.query.ownerId

        const requestResult = await db.query(`SELECT * FROM friends_requests WHERE owner_id=$1 AND new_friend_id=$2`, [ownerId, newFriendId])

        if (requestResult.rows.length === 0) {
            res.json({
                statusCode: 0,
                message: `Пользователь не найден`,
            })
        }
        if (requestResult.rows.length === 1) {
            res.json({
                statusCode: 1,
                message: `Пользователь найден`,
            })
        }
    }
    async getFriendsRequests(req, res) {
        const id = req.query.id

        const friendsRequestsResult = await db.query(`SELECT * FROM friends_requests WHERE owner_id=$1`, [id])
        const friendsRequests = formatFriendsRequests(sortFriendsRequests(friendsRequestsResult.rows))

        const friendsRequestsCount = friendsRequestsResult.rows.length > 0 && friendsRequestsResult.rows.length

        if (friendsRequests.length === 0) {
            res.json({
                statusCode: 0,
                message: `Отутствуют заявки в друзья пользователя id = ${id}`,
            })
        }
        if (friendsRequests.length > 0) {
            res.json({
                statusCode: 1,
                message: `Отдаю заявки в друзья пользователя id = ${id}`,
                data: {
                    friendsRequests,
                    friendsRequestsCount
                }
            })
        }
    }
    async addFriend(req, res) {
        const friendId = req.body.friendId
        const ownerId = req.body.ownerId


        const firstName = req.body.newFriendData.firstName
        const lastName = req.body.newFriendData.lastName
        const avatar = req.body.newFriendData.avatar
        const lastActivityTime = req.body.newFriendData.lastActivityTime
        const status = req.body.newFriendData.status


        const ownerFirstName = req.body.ownerData.firstName
        const ownerLastName = req.body.ownerData.lastName
        const ownerAvatar = req.body.ownerData.avatar
        const ownerLastActivityTime = req.body.ownerData.lastActivityTime
        const ownerStatus = req.body.ownerData.status

        const friendResult = await db.query('INSERT INTO friends (owner_id, friend_id, first_name, last_name, avatar, last_activity_time, status) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [ownerId, friendId, firstName, lastName, avatar, lastActivityTime, status])
        const friend = formatFriends(sortFriends(friendResult.rows))[0]


        await db.query('INSERT INTO friends (owner_id, friend_id, first_name, last_name, avatar, last_activity_time, status) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [friendId, ownerId, ownerFirstName, ownerLastName, ownerAvatar, ownerLastActivityTime, ownerStatus])
        await db.query(`DELETE FROM friends_requests WHERE owner_id=$1 AND new_friend_id=$2`, [ownerId, friendId])


        const friendsRequestsResult = await db.query(`SELECT * FROM friends_requests WHERE owner_id=$1`, [ownerId])
        const friendsRequestsCount = friendsRequestsResult.rows.length > 0 && friendsRequestsResult.rows.length

        res.json({
            statusCode: 1,
            message: `Новый друг добавлен`,
            data: {
                friend,
                friendsRequestsCount
            }
        })

    }

    async deleteFriend(req, res) {
        const friendId = req.query.friendId
        const ownerId = req.query.ownerId

        await db.query(`DELETE FROM friends WHERE owner_id=$1 AND friend_id=$2`, [ownerId, friendId])
        await db.query(`DELETE FROM friends WHERE owner_id=$1 AND friend_id=$2`, [friendId, ownerId])

        res.json({
            statusCode: 1,
            message: `Друг удалён`,
            data: {
                friendId
            }
        })

    }

    async getFriends(req, res) {
        const id = req.query.id

        const friendsResult = await db.query(`SELECT * FROM friends WHERE owner_id=$1`, [id])
        const friends = formatFriends(sortFriends(friendsResult.rows))

        res.json({
            statusCode: 1,
            message: `Отдаю друзей пользователя id = ${id}`,
            data: friends
        })

    }
    async getFriendStatus(req, res) {
        const friendId = req.query.friendId
        const ownerId = req.query.ownerId

        const friendResult = await db.query(`SELECT * FROM friends WHERE owner_id=$1 AND friend_id=$2`, [ownerId, friendId])

        if (friendResult.rows.length === 0) {
            res.json({
                statusCode: 0,
                message: `Пользователь не найден`,
            })
        }
        if (friendResult.rows.length === 1) {
            res.json({
                statusCode: 1,
                message: `Пользователь найден`,
            })
        }
    }

}
module.exports = new friendsControllers()