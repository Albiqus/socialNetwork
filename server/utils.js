module.exports = {
    sortPosts: function (posts) {
        let counter = 1;
        for (let i = 0; i < posts.length; i++) {
            for (let j = counter; j < posts.length; j++) {
                if (posts[i].id < posts[j].id) {
                    let saver = posts[i]
                    posts[i] = posts[j]
                    posts[j] = saver
                }
            }
            counter++
        }
        return posts
    }
};