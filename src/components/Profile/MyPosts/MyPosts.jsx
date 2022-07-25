import classes from './MyPosts.module.css';
import { NavLink } from 'react-router-dom';
import { NewPost } from './NewPost/NewPost';
import { Post } from './Post/Post';

const MyPosts = (props) => {
    const postElements = props.dataOfPosts.map(p => <Post message={p.message} likeCount={p.likeCount} />)
    return (
        <div className={classes.myPostsBlock}>
            <div className={classes.header}><NavLink className={classes.navLink} to='/posts'>Мои посты</NavLink></div>
            <NewPost addPost={props.addPost}/>
            {postElements}
        </div>
    )
}

export { MyPosts }