// import classes from'./MyPosts.module.css';
import { Post } from './Post/Post';


const MyPosts = () => {
    return (
        <div>
            Посты
            <div>
                Новый пост
            </div>
            <Post/>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export { MyPosts }