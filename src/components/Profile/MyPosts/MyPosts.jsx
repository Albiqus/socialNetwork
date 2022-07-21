import { NewPost } from './NewPost/NewPost';
import { Post } from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div className={classes.box}>
            <div className={classes.MyPostsBlock}>
            <h1>Мои посты</h1>
            <NewPost/>
            <Post message='наконец починил шкаф!' likeCount = '4'/>
            <Post message='Жду новый сезон глухаря' likeCount='1' />
            <Post message='Михалыч поймал рыбу ВО ДАЁТ' likeCount='7'/>
            </div>
        </div>
    )
}

export { MyPosts }