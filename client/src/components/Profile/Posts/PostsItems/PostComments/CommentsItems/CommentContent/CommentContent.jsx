import classes from './CommentContent.module.css';

export const CommentContent = ({ comment }) => {
    return (
        <div className={classes.commentContent}>
            {comment.text !== '' && <p>{comment.text}</p>}
            {comment.image && <div><img src={comment.image} alt='изображение'></img></div>}
        </div>
    )
}