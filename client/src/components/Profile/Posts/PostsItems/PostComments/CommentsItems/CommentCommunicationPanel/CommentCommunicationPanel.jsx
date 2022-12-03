import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from '../../../../../../../hocs/withRouter';
import classes from './CommentCommunicationPanel.module.css';
import likeEmpty from '../../../../../../../images/icons/like-empty.png'
import like from '../../../../../../../images/icons/like.png'
import { createCommentLike } from '../../../../../../../thunks/profile-thunks/createCommentLike';
import { deleteCommentLike } from '../../../../../../../thunks/profile-thunks/deleteCommentLike';
import { useEffect, useState } from 'react';
import { getCommentLikesUsers } from '../../../../../../../thunks/profile-thunks/getCommentLikesUsers';
import { resetCommentLikesUsers, resetPostLikesUsers, setCommentLikesModalStatus } from '../../../../../../../store/profile-reducer';
import { updateLastActivityTime } from '../../../../../../../thunks/common-thunks/updateLastActivityTime';

const CommentCommunicationPanel = ({
    post,
    comment,
    likedCommentsIds,
    createCommentLike,
    deleteCommentLike,
    isHoverCommentId,
    router,
    authUserData,
    commentLikesUsers,
    getCommentLikesUsers,
    resetCommentLikesUsers,
    setCommentLikesModalStatus,
    commentLikesModalStatus,
    resetPostLikesUsers,
    updateLastActivityTime }) => {

    const currentId = router.params.userId
    const authUserId = localStorage.getItem('id')

    const onLikeClick = (e) => {
        updateLastActivityTime(authUserId)

        const commentId = e.currentTarget.id

        if (likedCommentsIds.includes(commentId)) {
            const newLikesCount = Number(comment.likesCount) - 1
            deleteCommentLike(authUserId, currentId, commentId, newLikesCount, post.id)
        }
        if (!likedCommentsIds.includes(commentId)) {
            const newLikesCount = Number(comment.likesCount) + 1
            createCommentLike
                (authUserId,
                    currentId,
                    commentId,
                    newLikesCount,
                    post.id,
                    authUserData.firstName,
                    authUserData.lastName,
                    authUserData.avatar,
                    authUserData.lastActivityTime)
        }
    }

    let likeButtonBoxClassName = classes.likesButtonBox;
    if (isHoverCommentId === comment.id || comment.likesCount !== '0') likeButtonBoxClassName += ` ${classes.visible}`


    const [mouseEnterTimerId, setMouseEnterTimerId] = useState(null)

    const onLikesButtonBoxMouseEnter = () => {
        const cb = () => {
            resetPostLikesUsers()
            getCommentLikesUsers(comment.id)
        }
        const timerId = setTimeout(cb, 500);
        setMouseEnterTimerId(timerId)
        for (var i = 0; i < timerId; i++) {
            clearTimeout(i);
        }
    }

    const onLikesButtonBoxMouseLeave = () => {
        clearTimeout(mouseEnterTimerId);
        const cb = () => {
            resetCommentLikesUsers()

        }
        setTimeout(cb, 1000);
    }


    const onTooltipEnter = () => {
        let id = setTimeout(function () { }, 0);
        while (id--) {
            clearTimeout(id)
        }
    }

    const onTooltipLeave = () => {
        const cb = () => {
            if (!commentLikesModalStatus) resetCommentLikesUsers()
        }
        setTimeout(cb, 1000);
    }

    useEffect(() => {
        if (mouseEnterTimerId) getCommentLikesUsers(comment.id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [comment.likesCount]);

    const onTooltipClick = () => {
        updateLastActivityTime(authUserId)

        setCommentLikesModalStatus(true)
    }

    const usersItems = []
    if (commentLikesUsers) {
        for (let i = 0; i < 3; i++) {
            if (!commentLikesUsers[i]) break
            usersItems.push(
                <div className={classes.userItem} key={commentLikesUsers[i].userId}>
                    {commentLikesUsers[i].avatar === '' && <img className={classes.avatar} src={require('../../../../../../../images/incognito/incognito-small.png')} alt='аватар'></img>}
                    {commentLikesUsers[i].avatar !== '' && <img className={classes.avatar} src={`http://localhost:4000/images/${commentLikesUsers[i].avatar}`} alt='аватар'></img>}
                </div>
            )
        }
    }

    return (
        <div className={classes.communicationBox}>
            {commentLikesUsers && comment.id === commentLikesUsers[0]?.commentId &&
                <div onClick={onTooltipClick} onMouseEnter={onTooltipEnter} onMouseLeave={onTooltipLeave} className={classes.tooltip}>
                    {usersItems}
                </div>}
            <div className={likeButtonBoxClassName} onMouseEnter={onLikesButtonBoxMouseEnter} onMouseLeave={onLikesButtonBoxMouseLeave}>
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
        authUserData: state.authUserReducer.authUserData,
        commentLikesUsers: state.profilePage.commentLikesUsers,
        commentLikesModalStatus: state.profilePage.commentLikesModalStatus
    }
}

export default compose(connect(mapStateToProps, {
    createCommentLike,
    deleteCommentLike,
    getCommentLikesUsers,
    resetCommentLikesUsers,
    setCommentLikesModalStatus,
    resetPostLikesUsers,
    updateLastActivityTime
}), withRouter)(CommentCommunicationPanel)