const db = require('../data-base')

class UserControllers {
    async getUsers(req, res) {
        const users = await db.query(`SELECT * FROM users`)
        res.json(users.rows)

    }
    async getOneUser(req, res) {
        const email = req.query.login
        const existingUser = await db.query(`SELECT * FROM users WHERE email=$1`, [email])
        console.log(existingUser.rows)
        if (existingUser.rows.length > 0) {
            res.json({
                message: 'Пользователь с такой почтой уже зарегистрирован',
                statusCode: 1
            })
        } else {
            res.json({
                statusCode: 0
            })
        }
    }
    async registerUser(req, res) {
        const {
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
        const existingUser = await db.query(`SELECT * FROM users WHERE email=$1`, [email])

        if (existingUser.rows.length > 0) {
            res.json({
                statusCode: 0,
                message: 'Пользователь с такой почтой уже зарегистрирован'
            })
        } else {
            const newUser = await db.query('INSERT INTO users (first_name, last_name, email, password, country, city, phone, date_of_birth, gender, marital_status, secret_key) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
                [
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
                    data: user.rows[0]
                })
            } else {
                res.json({
                    statusCode: 0,
                    message: 'Неправильный логин или пароль',
                })
            }
        }
    }
}

module.exports = new UserControllers()