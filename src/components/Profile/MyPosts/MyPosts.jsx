import classes from './MyPosts.module.css';
import { NewPost } from './NewPost/NewPost';
import { Post } from './Post/Post';

const MyPosts = (props) => {
    const postElements = props.dataOfPosts.map(p => <Post message={p.message} likeCount={p.likeCount} />)
    return (
        <div className={classes.box}>
            <div className={classes.MyPostsBlock}>
            <h1>Мои посты</h1>
            <NewPost/>
                {postElements}
            </div>
        </div>
    )
}

export { MyPosts }