const db = require('../data-base')
const multer = require("multer");

class UserControllers {
    async getAllUsers(req, res) {
        const users = await db.query(`SELECT * FROM users`)
        res.json(users.rows)

    }
    async getOneUser(req, res) {
        const email = req.query.login
        const existingUser = await db.query(`SELECT * FROM users WHERE email=$1`, [email])
        if (existingUser.rows.length > 0) {
            res.json({
                statusCode: 1,
                message: 'Пользователь с такой почтой уже зарегистрирован'
            })
        } else {
            res.json({
                statusCode: 0
            })
        }
    }
    async getTenUsers(req, res) {
        const countResult = await db.query('SELECT count( * ) FROM users')
        const usersCount = countResult.rows[0].count
        const pagesCount = Math.ceil(usersCount / 10)

        const currentPage = req.query.page
  
        let currentUserPosition;
        if (currentPage === '1') {
            currentUserPosition = 0
        } else {
            currentUserPosition = Number(String(currentPage) + '0') - 10
        }
        
        const usersResult = await db.query(`SELECT * FROM users OFFSET ${currentUserPosition} LIMIT 10`)
        const tenUsers = usersResult.rows.map((user) => {
            return {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                status: user.status,
                country: user.country,
                date_of_birth: user.date_of_birth,
                avatar_average: user.avatar_average
            }
        })

        if (tenUsers.length === 0) {
            res.json({
                statusCode: 0,
                message: 'нет ни одного зарегистрированного пользователя'
            })
        } else {
            res.json({
                statusCode: 1,
                data: {
                    pagesCount: pagesCount,
                    tenUsers: tenUsers
                }
            })
        }
    }

    async registerUser(req, res) {
        let {
            firstName,
            lastName,
            email,
            password,
            country,
            city,
            phone,
            dateOfBirth,
            gender,
            maritalStatus,
            secretKey
        } = req.body
        const status = ''
        const avatarBig = ''
        const avatarAverage = ''
        const avatarSmall = ''
        dateOfBirth = dateOfBirth.replace('-', '.').replace('-', '.')

        const existingUser = await db.query(`SELECT * FROM users WHERE email=$1`, [email])

        if (existingUser.rows.length > 0) {
            res.json({
                statusCode: 0,
                message: 'Пользователь с такой почтой уже зарегистрирован'
            })
        } else {
            const newUser = await db.query('INSERT INTO users (first_name, last_name, status, email, password, country, city, phone, date_of_birth, gender, marital_status, secret_key, avatar_big, avatar_average, avatar_small) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *',
                [
                    firstName,
                    lastName,
                    status,
                    email,
                    password,
                    country,
                    city,
                    phone,
                    dateOfBirth,
                    gender,
                    maritalStatus,
                    secretKey,
                    avatarBig,
                    avatarAverage,
                    avatarSmall
                ])
            res.json({
                statusCode: 1,
                message: 'Пользователь успешно зарегистрирован',
                data: newUser.rows[0],
            })
        }
    }
    async login(req, res) {
        const email = req.query.login
        const password = req.query.password
        const user = await db.query(`SELECT * FROM users WHERE email=$1`, [email])

        if (user.rows.length === 0) {
            res.json({
                statusCode: 0,
                message: 'Неправильный логин или пароль'
            })
        } else {
            if (user.rows[0].password === password) {

                res.json({
                    statusCode: 1,
                    message: 'Авторизация прошла успешно',
                    data: {
                        id: user.rows[0].id
                    }
                })
            } else {
                res.json({
                    statusCode: 0,
                    message: 'Неправильный логин или пароль',
                })
            }
        }

    }
    async getProfileData(req, res) {
        const userId = req.query.userId
        const user = await db.query(`SELECT * FROM users WHERE id=$1`, [userId])

        if (user.rows[0]) {

            let profileData = {
                id: user.rows[0].id,
                firstName: user.rows[0].first_name,
                lastName: user.rows[0].last_name,
                status: user.rows[0].status,
                city: user.rows[0].city,
                dateOfBirthday: user.rows[0].date_of_birth,
                maritalStatus: user.rows[0].marital_status,
                avatarBig: user.rows[0].avatar_big,
                avatarAverage: user.rows[0].avatar_average,
                avatarSmall: user.rows[0].avatar_small
            }
            res.json({
                statusCode: 1,
                profileData: profileData,
            })
        }
        if (!user.rows[0]) {
            res.json({
                statusCode: 0,
                message: 'пользователь не найден',
            })
        }
    }
    async setUserStatus(req, res) {
        const status = req.body.status
        const id = req.body.id

        const user = await db.query(`UPDATE users set status = $1 where id = $2 RETURNING *`, [status, id])
        res.json({
            statusCode: 1,
            message: 'статус обновлён',
            data: {
                status
            }
        })
    }
    async uploadAvatar(req, res, next) {
        const avatarAverage = `http://localhost:4000/images/${req.file.filename}`
        const userId = req.query.userId
        const user = db.query(`UPDATE users set avatar_average = $1 where id = $2 RETURNING *`, [avatarAverage, userId])
        res.json({
            statusCode: 1,
            message: 'автар обновлён',
            data: {
                avatarAverage
            }
        })
    }
}

module.exports = new UserControllers()