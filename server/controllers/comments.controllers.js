const db = require('../data-base')

class CommentsControllers {
    async createComment(req, res) {
        console.log('в меня что-то ушло')
            res.json({
                statusCode: 1,
                message: 'в меня что-то пришло',
            })
    }


}
module.exports = new CommentsControllers()