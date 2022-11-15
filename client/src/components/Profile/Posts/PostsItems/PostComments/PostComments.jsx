
import classes from './PostComments.module.css';
import CommentsForm from './CommentsForm/CommentsForm';
import CommentsItems from './CommentsItems/CommentsItems';

export const PostComments = ({ post }) => {
    return (
        <div className={classes.commentsBox}>
            <CommentsItems post={post} />
            <CommentsForm post={post} />
        </div>
    )
}



