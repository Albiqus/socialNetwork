const db = require('../data-base')

class UserControllers {
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
         res.json(newUser.rows[0])
    }
    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM users')
        res.json(users.rows)
    }
}

module.exports = new UserControllers()