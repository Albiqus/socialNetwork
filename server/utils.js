module.exports = {
    sortPosts: function (posts) {
        let counter = 1;
        for (let i = 0; i < posts.length; i++) {
            for (let j = counter; j < posts.length; j++) {
                if (Number(posts[i].id) < Number(posts[j].id)) {
                    let saver = posts[i]
                    posts[i] = posts[j]
                    posts[j] = saver
                }
            }
            counter++
        }
        return posts
    },
    formatPosts: function (posts) {
        const formatedPosts = posts.map((post) => {
            return {
                id: post.id,
                userId: post.user_id,
                text: post.text,
                image: post.image,
                date: post.date,
                likesCount: post.likes_count,
                commentsCount: post.comments_count
            }
        })
        return formatedPosts
    },
    formatComments: function (comments) {
        const formatedComments = comments.map((comment) => {
            return {
                id: comment.id,
                postId: comment.post_id,
                userId: comment.user_id,
                firstName: comment.first_name,
                lastName: comment.last_name,
                text: comment.text,
                date: comment.date,
                avatar: comment.avatar,
                image: comment.image,
                likesCount: comment.likes_count
            }
        })
        return formatedComments
    }
};