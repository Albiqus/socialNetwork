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
    sortPostLikesUsers: function (postLikesUsers) {
        let counter = 1;
        for (let i = 0; i < postLikesUsers.length; i++) {
            for (let j = counter; j < postLikesUsers.length; j++) {
                if (Number(postLikesUsers[i].id) < Number(postLikesUsers[j].id)) {
                    let saver = postLikesUsers[i]
                    postLikesUsers[i] = postLikesUsers[j]
                    postLikesUsers[j] = saver
                }
            }
            counter++
        }
        return postLikesUsers
    },
    formatPostLikesUsers: function (postLikesUsers) {
        const formatedPostLikesUsers = postLikesUsers.map((postLikesUser) => {
            return {
                id: postLikesUser.id,
                postId: postLikesUser.post_id,
                userId: postLikesUser.user_id,
                firstName: postLikesUser.first_name,
                lastName: postLikesUser.last_name,
                avatar: postLikesUser.avatar
            }
        })

        return formatedPostLikesUsers
    },
    sortComments: function (comments) {
        let counter = 1;
        for (let i = 0; i < comments.length; i++) {
            for (let j = counter; j < comments.length; j++) {
                if (Number(comments[i].id) > Number(comments[j].id)) {
                    let saver = comments[i]
                    comments[i] = comments[j]
                    comments[j] = saver
                }
            }
            counter++
        }
        return comments
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
    },
    formatCommentLikesUsers: function (commentLikesUsers) {
        const formatedCommentLikesUsers = commentLikesUsers.map((commentLikesUser) => {
            return {
                commentId: commentLikesUser.comment_id,
                userId: commentLikesUser.user_id,
                firstName: commentLikesUser.first_name,
                lastName: commentLikesUser.last_name,
                avatar: commentLikesUser.avatar
            }
        })

        return formatedCommentLikesUsers
    },
};