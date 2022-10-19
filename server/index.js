const express = require('express')
const cors = require('cors') 
const router = require('./routes/user.routes')

const PORT = process.env.PORT || 4000

const app = express()

app.listen(PORT, () => {
    console.log(`сервер работает на ${PORT}`)
})

app.use(cors())
app.use(express.json())
app.use('/api', router)