import classes from './MyPosts.module.css';
import { NewPost } from './NewPost/NewPost';
import { Post } from './Post/Post';
import { dataOfPosts } from '../../MockData/MockData.js'

const MyPosts = () => {
    return (
        <div className={classes.box}>
            <div className={classes.MyPostsBlock}>
            <h1>Мои посты</h1>
            <NewPost/>
            <Post message={dataOfPosts[0].message} likeCount={dataOfPosts[0].likeCount} />
            <Post message={dataOfPosts[1].message} likeCount={dataOfPosts[1].likeCount} />
            <Post message={dataOfPosts[2].message} likeCount={dataOfPosts[2].likeCount} />
            </div>
        </div>
    )
}

export { MyPosts }