import { useState } from 'react';
import { connect } from 'react-redux';
import classes from './CommentsItems.module.css';
import CommentInfo from './CommentInfo/CommentInfo';
import { CommentContent } from './CommentContent/CommentContent';
import CommentCommunicationPanel from './CommentCommunicationPanel/CommentCommunicationPanel';

const CommentsItems = ({ comments, post}) => {

    const [deleteCommentButtonPostId, setDeleteCommentButtonPostId] = useState(null)
    const [isHoverCommentId, setIsHoverCommentId] = useState(false)

    const onCommentItemMouseEnter = (e) => {
        const commentId = e.currentTarget.id
        setDeleteCommentButtonPostId(commentId)
        setIsHoverCommentId(commentId)
    }
    const onCommentItemMouseLeave = (e) => {
        setDeleteCommentButtonPostId(null)
        setIsHoverCommentId(null)
    }

    const commentsItems = comments[post.id]?.map((comment) => {
        return (
            <div onMouseEnter={onCommentItemMouseEnter} onMouseLeave={onCommentItemMouseLeave} className={classes.commentItem} key={comment.id} id={comment.id}>
                <CommentInfo post={post} comment={comment} deleteCommentButtonPostId={deleteCommentButtonPostId}/>
                <CommentContent comment={comment} />
                <CommentCommunicationPanel post={post} comment={comment} isHoverCommentId={isHoverCommentId}/>
            </div>
        )
    })

    return (
        <div className={classes.commentsItemsBox}>
            {commentsItems}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        comments: state.profilePage.comments,
    }
}

export default connect(mapStateToProps, {  })(CommentsItems)