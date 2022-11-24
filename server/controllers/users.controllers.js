const db = require('../data-base')

class UsersControllers {
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

        const usersResult = await db.query(`SELECT * FROM users ORDER BY id DESC OFFSET ${currentUserPosition} LIMIT 10`)
        const tenUsers = usersResult.rows.map((user) => {
            return {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                status: user.status,
                country: user.country,
                date_of_birth: user.date_of_birth,
                avatar: user.avatar
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
        const avatar = ''
        dateOfBirth = dateOfBirth.replace('-', '.').replace('-', '.')

        const existingUser = await db.query(`SELECT * FROM users WHERE email=$1`, [email])

        if (existingUser.rows.length > 0) {
            res.json({
                statusCode: 0,
                message: 'Пользователь с такой почтой уже зарегистрирован'
            })
        } else {
            const newUser = await db.query('INSERT INTO users (first_name, last_name, status, email, password, country, city, phone, date_of_birth, gender, marital_status, secret_key, avatar) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *',
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
                    avatar
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
                avatar: user.rows[0].avatar
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

        await db.query(`UPDATE users set status = $1 where id = $2 RETURNING *`, [status, id])
        res.json({
            statusCode: 1,
            message: 'статус обновлён',
            data: {
                status
            }
        })
    }
    async uploadAvatar(req, res, next) {
        const avatar = req.file.filename 
        const userId = req.query.userId

        db.query(`UPDATE users set avatar = $1 where id = $2 RETURNING *`, [avatar, userId])
        db.query(`UPDATE comments set avatar = $1 where user_id = $2 RETURNING *`, [avatar, userId])
        db.query(`UPDATE posts_likes set avatar = $1 where user_id = $2 RETURNING *`, [avatar, userId])
        db.query(`UPDATE comments_likes set avatar = $1 where user_id = $2 RETURNING *`, [avatar, userId])

        res.json({
            statusCode: 1,
            message: 'автар обновлён',
            data: {
                avatar
            }
        })
    }
    async deleteAvatar(req, res) {
        const userId = req.query.userId
        const avatar = ''

        db.query(`UPDATE users set avatar = $1 where id = $2 RETURNING *`, [avatar, userId])
        db.query(`UPDATE comments set avatar = $1 where user_id = $2 RETURNING *`, [avatar, userId])
        db.query(`UPDATE posts_likes set avatar = $1 where user_id = $2 RETURNING *`, [avatar, userId])
        db.query(`UPDATE comments_likes set avatar = $1 where user_id = $2 RETURNING *`, [avatar, userId])

        res.json({
            statusCode: 1,
            message: 'автар удалён',
            data: {
                avatar
            }
        })
    }
    async getUserData(req, res) {
        const userId = req.query.userId
        const userResult = await db.query(`SELECT * FROM users WHERE id=$1`, [userId])

        res.json({
            statusCode: 1,
            data: {
                firstName: userResult.rows[0].first_name,
                lastName: userResult.rows[0].last_name,
                gender: userResult.rows[0].gender,
                dateOfBirth: userResult.rows[0].date_of_birth.replace('.', '-').replace('.', '-'),
                country: userResult.rows[0].country,
                city: userResult.rows[0].city,
                maritalStatus: userResult.rows[0].marital_status,
                phone: userResult.rows[0].phone
            },
        })

    }
    async updateUserData(req, res) {
        const userId = req.body.userId
        const firstName = req.body.firstName
        const lastName = req.body.lastName
        const country = req.body.country
        const city = req.body.city
        const phone = req.body.phone
        const dateOfBirth = req.body.dateOfBirth.replace('-', '.').replace('-', '.')
        const gender = req.body.gender
        const maritalStatus = req.body.maritalStatus
        
        const newUserDataResult = await db.query(`UPDATE users set first_name = $1, last_name = $2, country = $3, city = $4, phone = $5, date_of_birth = $6, gender = $7, marital_status = $8 where id = $9 RETURNING *`,
            [firstName, lastName, country, city, phone, dateOfBirth, gender, maritalStatus, userId])
        db.query(`UPDATE comments set first_name = $1, last_name = $2 where user_id = $3 RETURNING *`, [firstName, lastName, userId])
        db.query(`UPDATE posts_likes set first_name = $1, last_name = $2 where user_id = $3 RETURNING *`, [firstName, lastName, userId])
        db.query(`UPDATE comments_likes set first_name = $1, last_name = $2 where user_id = $3 RETURNING *`, [firstName, lastName, userId])
        
           res.json({
               statusCode: 1,
               message: 'данные успешно обновлены',
           })
    }
}

module.exports = new UsersControllers()