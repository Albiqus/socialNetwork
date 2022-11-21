import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { withRouter } from '../../../../../../../hocs/withRouter';
import { deleteOneComment } from '../../../../../../../thunks/deleteOneComment';
import { getDateFormat } from '../../../../../../../utils/profile-utils/getFormatDate';
import deleteIcon from '../../../../../../../images/icons/delete.png'
import classes from './CommentInfo.module.css';

const CommentInfo = ({ post, comment, router, deleteOneComment, deleteCommentButtonPostId }) => {

    const currentId = router.params.userId
    const authUserId = localStorage.getItem('id')

    const date = comment.date
    const dateFormat = getDateFormat(date)

    const onDeleteCommentClick = (e) => {
        const commentId = e.currentTarget.id
        const newCommentsCount = Number(post.commentsCount) - 1
        const postId = post.id
        deleteOneComment(postId, commentId, newCommentsCount)
    }

    let deleteIconClassName = classes.deleteIcon
    if (deleteCommentButtonPostId === comment.id) {
        deleteIconClassName += ` ${classes.visible}`
    }

    return (
        <div className={classes.commentInfo}>
            <div className={classes.commentAvatarBox}>
                {comment.avatar === '' && <NavLink to={`/profile/${comment.userId}`}><img className={classes.commentAvatar} src={require('../../../../../../../images/incognito/incognito-small.png')} alt='аватар'></img></NavLink>}
                {comment.avatar !== '' && <NavLink to={`/profile/${comment.userId}`}><img className={classes.commentAvatar} src={comment.avatar} alt='аватар'></img></NavLink>}
            </div>
            <NavLink to={`/profile/${comment.userId}`} className={classes.fullName}>{comment.firstName} {comment.lastName}</NavLink>
            <p className={classes.date}>{dateFormat}</p>
            {comment.userId === authUserId && <img onClick={onDeleteCommentClick} className={deleteIconClassName} src={deleteIcon} id={comment.id} alt="удалить" />}
            {currentId === authUserId && <img onClick={onDeleteCommentClick} className={deleteIconClassName} src={deleteIcon} id={comment.id} alt="удалить" />}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {}
}

export default compose(connect(mapStateToProps, { deleteOneComment }), withRouter)(CommentInfo)