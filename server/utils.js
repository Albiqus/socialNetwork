    const getRandomNumber = (min, max) => {
        let result = Math.floor(Math.random() * (max - min + 1)) + min
        return result
    }

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
                    commentsCount: post.comments_count,
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
                    avatar: postLikesUser.avatar,
                    lastActivityTime: postLikesUser.last_activity_time
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
                    likesCount: comment.likes_count,
                    lastActivityTime: comment.last_activity_time
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
                    avatar: commentLikesUser.avatar,
                    lastActivityTime: commentLikesUser.last_activity_time
                }
            })
            return formatedCommentLikesUsers
        },
        sortFriendsRequests: function (requests) {
            let counter = 1;
            for (let i = 0; i < requests.length; i++) {
                for (let j = counter; j < requests.length; j++) {
                    if (Number(requests[i].id) < Number(requests[j].id)) {
                        let saver = requests[i]
                        requests[i] = requests[j]
                        requests[j] = saver
                    }
                }
                counter++
            }
            return requests
        },
        formatFriendsRequests: function (requests) {
            const formatedRequests = requests.map((request) => {
                return {
                    newFriendId: request.new_friend_id,
                    firstName: request.first_name,
                    lastName: request.last_name,
                    avatar: request.avatar,
                    lastActivityTime: request.last_activity_time,
                    status: request.status
                }
            })
            return formatedRequests
        },
        sortFriends: function (friends) {
            let counter = 1;
            for (let i = 0; i < friends.length; i++) {
                for (let j = counter; j < friends.length; j++) {
                    if (Number(friends[i].id) < Number(friends[j].id)) {
                        let saver = friends[i]
                        friends[i] = friends[j]
                        friends[j] = saver
                    }
                }
                counter++
            }
            return friends
        },
        formatFriends: function (friends) {
            const formatedFriends = friends.map((friend) => {
                return {
                    friendId: friend.friend_id,
                    firstName: friend.first_name,
                    lastName: friend.last_name,
                    avatar: friend.avatar,
                    lastActivityTime: friend.last_activity_time,
                    status: friend.status
                }
            })
            return formatedFriends
        },
        getSixRandomFriends: function (friends) {
            const newFriens = []
            for (let i = 0; i < 6; i++) {
                const randomNumber = getRandomNumber(0, friends.length - 1)
                newFriens.push(friends[randomNumber])
                friends.splice(randomNumber, 1)
            }
            return newFriens
        },
    };