import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from '../../../../../../../hocs/withRouter';
import classes from './CommentCommunicationPanel.module.css';
import likeEmpty from '../../../../../../../images/icons/like-empty.png'
import like from '../../../../../../../images/icons/like.png'
import { createCommentLike } from '../../../../../../../thunks/createCommentLike';
import { deleteCommentLike } from '../../../../../../../thunks/deleteCommentLike';

const CommentCommunicationPanel = ({ post, comment, likedCommentsIds, createCommentLike, deleteCommentLike, isHoverCommentId, router, authUserData }) => {

    const currentId = router.params.userId
    const authUserId = localStorage.getItem('id')


    const onLikeClick = (e) => {
        const commentId = e.currentTarget.id

        if (likedCommentsIds.includes(commentId)) {
            const newLikesCount = Number(comment.likesCount) - 1
            deleteCommentLike(authUserId, currentId, commentId, newLikesCount, post.id)
        }
        if (!likedCommentsIds.includes(commentId)) {
            const newLikesCount = Number(comment.likesCount) + 1
            createCommentLike(authUserId, currentId, commentId, newLikesCount, post.id, authUserData.firstName, authUserData.lastName, authUserData.avatar)
        }
    }

    let likeButtonBoxClassName = classes.likesButtonBox;
    if (isHoverCommentId === comment.id || comment.likesCount !== '0') {
        likeButtonBoxClassName += ` ${classes.visible}`
    }

    return (
        <div className={classes.communicationBox}>
            <div className={likeButtonBoxClassName}>
                {likedCommentsIds?.includes(comment.id) && <img onClick={onLikeClick} src={like} id={comment.id} alt="убрать лайк" />}
                {!likedCommentsIds?.includes(comment.id) && <img onClick={onLikeClick} src={likeEmpty} id={comment.id} alt="лайкнуть" />}
                {comment.likesCount !== '0' && <p>{comment.likesCount}</p>}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        likedCommentsIds: state.profilePage.likedCommentsIds,
        authUserData: state.authUserReducer.authUserData
    }
}

export default compose(connect(mapStateToProps, { createCommentLike, deleteCommentLike }), withRouter)(CommentCommunicationPanel)