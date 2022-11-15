import classes from './PostContent.module.css';

export const PostContent = ({ post }) => {
    return (
        <div className={classes.postContent}>
            {post.text !== '' && <p>{post.text}</p>}
            {post.image && <div><img src={post.image} alt='изображение'></img></div>}
        </div>
    )
}