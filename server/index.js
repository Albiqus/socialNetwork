const express = require('express')
const cors = require('cors')
const router = require('./routes/user.routes')
const path = require('path')

const PORT = process.env.PORT || 4000

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)
app.use('/images', express.static(path.join(__dirname, 'images')))

app.listen(PORT, () => {
    console.log(`сервер работает на ${PORT}`)
})


