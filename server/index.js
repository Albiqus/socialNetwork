const express = require('express')
const cors = require('cors')
const path = require('path')

const usersRouter = require('./routes/users.routes')
const postsRouter = require('./routes/posts.routes')
const usersLikesRouter = require('./routes/users-likes.routes')
const commentsRouter = require('./routes/comments.routes')


const PORT = process.env.PORT || 4000

const app = express()

app.use(cors())
app.use(express.json())
app.use('/images', express.static(path.join(__dirname, 'images')))


app.use('/api', usersRouter)
app.use('/api', postsRouter)
app.use('/api', usersLikesRouter)
app.use('/api', commentsRouter)


app.listen(PORT, () => {
    console.log(`сервер работает на ${PORT}`)
})


