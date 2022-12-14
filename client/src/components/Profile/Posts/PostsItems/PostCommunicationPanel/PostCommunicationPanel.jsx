
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createPostLike } from '../../../../../thunks/profile-thunks/createPostLike';
import { deletePostLike } from '../../../../../thunks/profile-thunks/deletePostLike';
import likeEmpty from '../../../../../images/icons/like-empty.png'
import like from '../../../../../images/icons/like.png'
import comment from '../../../../../images/icons/comment.png'
import classes from './PostCommunicationPanel.module.css';
import { resetCommentLikesUsers, resetPostLikesUsers, setNewOpenCommentsPostId, setPostLikesModalStatus } from '../../../../../store/profile-reducer';
import { getComments } from '../../../../../thunks/profile-thunks/getComments';
import { getPostLikesUsers } from '../../../../../thunks/profile-thunks/getPostLikesUsers';
import { useEffect, useState } from 'react';
import { updateLastActivityTime } from '../../../../../thunks/common-thunks/updateLastActivityTime';
import { withAuthUserId } from '../../../../../hocs/withAuthUserId';
import { withCurrentUserId } from '../../../../../hocs/withCurrentUserId';

const PostCommunicationPanel = ({
    post,
    posts,
    likedPostsIds,
    createPostLike,
    deletePostLike,
    setNewOpenCommentsPostId,
    openСommentsPostsIds,
    getComments,
    getPostLikesUsers,
    authUserData,
    postLikesUsers,
    resetPostLikesUsers,
    setPostLikesModalStatus,
    postLikesModalStatus,
    resetCommentLikesUsers,
    updateLastActivityTime,
    authUserId,
    currentId }) => {
    

    const onLikeBoxClick = (e) => {
        updateLastActivityTime(authUserId)

        const postId = e.currentTarget.id
        const likesCount = Number(posts.find(post => post.id === postId).likesCount)

        if (likedPostsIds.includes(postId)) {
            const newLikesCount = likesCount - 1
            deletePostLike(authUserId, currentId, postId, newLikesCount)
        }
        if (!likedPostsIds.includes(postId)) {
            const newLikesCount = likesCount + 1
            createPostLike(
                authUserId,
                currentId,
                postId,
                newLikesCount,
                authUserData.firstName,
                authUserData.lastName,
                authUserData.avatar,
                authUserData.lastActivityTime
            )
        }
    }

    const onCommentsBoxClick = (e) => {
        updateLastActivityTime(authUserId)

        const postId = e.currentTarget.id
        if (!openСommentsPostsIds.includes(postId)) {
            setNewOpenCommentsPostId(postId)
            getComments(postId)
        }
    }

    const [mouseEnterTimerId, setMouseEnterTimerId] = useState(null)
    const [mouseLeaveTimerId, setMouseLeaveTimerId] = useState(null)

    const onLikeBoxMouseEnter = (time) => {
        if (time !== 0) time = 500
        const cb = () => {
            resetCommentLikesUsers()
            getPostLikesUsers(post.id)
        }
        const timerId = setTimeout(cb, time);
        setMouseEnterTimerId(timerId)
        for (var i = 0; i < timerId; i++) {
            clearTimeout(i);
        }
    }

    const onLikeBoxMouseLeave = () => {
        clearTimeout(mouseEnterTimerId);
        const cb = () => {
            resetPostLikesUsers()
        }
        const timerId = setTimeout(cb, 1000);
        setMouseLeaveTimerId(timerId)
    }

    const onTooltipEnter = () => {
        clearTimeout(mouseLeaveTimerId);
    }

    const onTooltipLeave = () => {
        const cb = () => {
            if (!postLikesModalStatus) resetPostLikesUsers()
        }
        const timerId = setTimeout(cb, 1000);
        setMouseLeaveTimerId(timerId)
    }

    useEffect(() => {
        if (mouseEnterTimerId) onLikeBoxMouseEnter(0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [post.likesCount]);

    const onTooltipClick = () => {
        updateLastActivityTime(authUserId)

        setPostLikesModalStatus(true)
    }

    const usersItems = []
    if (postLikesUsers) {
        for (let i = 0; i < 3; i++) {
            if (!postLikesUsers[i]) break
            usersItems.push(
                <div className={classes.userItem} key={postLikesUsers[i].userId}>
                    {postLikesUsers[i].avatar === '' && <img className={classes.avatar} src={require('../../../../../images/incognito/incognito-small.png')} alt='аватар'></img>}
                    {postLikesUsers[i].avatar !== '' && <img className={classes.avatar} src={`http://localhost:4000/images/${postLikesUsers[i].avatar}`} alt='аватар'></img>}
                </div>
            )
        }
    }

    return (
        <div className={classes.communicationBox}>
            {postLikesUsers && post.id === postLikesUsers[0]?.postId &&
                <div onClick={onTooltipClick} onMouseEnter={onTooltipEnter} onMouseLeave={onTooltipLeave} className={classes.tooltip}>
                    {usersItems}
                </div>}
            <div onClick={onLikeBoxClick} onMouseEnter={onLikeBoxMouseEnter} onMouseLeave={onLikeBoxMouseLeave} className={classes.likesButtonBox} id={post.id}>
                {likedPostsIds?.includes(post.id)
                    ? <img src={like} alt="убрать лайк" />
                    : <img src={likeEmpty} alt="лайкнуть" />
                }
                {post.likesCount !== '0' && <p>{post.likesCount}</p>}
            </div>
            <div onClick={onCommentsBoxClick} className={classes.commentsButtonBox} id={post.id}>
                <img src={comment} alt="прокомментировать" />
                {post.commentsCount !== '0' && <p>{post.commentsCount}</p>}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        likedPostsIds: state.profilePage.likedPostsIds,
        openСommentsPostsIds: state.profilePage.openСommentsPostsIds,
        authUserData: state.authUserReducer.authUserData,
        postLikesUsers: state.profilePage.postLikesUsers,
        postLikesModalStatus: state.profilePage.postLikesModalStatus
    }
}

export default compose(connect(mapStateToProps, {
    createPostLike,
    deletePostLike,
    setNewOpenCommentsPostId,
    getComments,
    getPostLikesUsers,
    resetPostLikesUsers,
    setPostLikesModalStatus,
    resetCommentLikesUsers,
    updateLastActivityTime
}), withCurrentUserId, withAuthUserId)(PostCommunicationPanel)