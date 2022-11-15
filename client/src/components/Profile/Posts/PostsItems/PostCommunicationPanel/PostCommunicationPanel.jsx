
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from '../../../../../hocs/withRouter';
import { createPostLike } from '../../../../../thunks/createPostLike';
import { deletePostLike } from '../../../../../thunks/deletePostLike';
import likeEmpty from '../../../../../images/icons/like-empty.png'
import like from '../../../../../images/icons/like.png'
import comment from '../../../../../images/icons/comment.png'

import classes from './PostCommunicationPanel.module.css';
import { setNewOpenCommentsPostId } from '../../../../../store/profile-reducer';
import { getAndSetComments } from '../../../../../thunks/getAndSetComments';

const PostCommunicationPanel = ({ post, router, posts, likedPostsIds, createPostLike, deletePostLike, setNewOpenCommentsPostId, openСommentsPostsIds, getAndSetComments }) => {

    const currentId = router.params.userId
    const authUserId = localStorage.getItem('id')

    const onLikeBoxClick = (e) => {
        const postId = e.currentTarget.id
        const likesCount = Number(posts.find(post => post.id === postId).likesCount)
        
        if (likedPostsIds.includes(postId)) {
            const newLikesCount = likesCount - 1
            deletePostLike(authUserId, currentId, postId, newLikesCount)
        }
        if (!likedPostsIds.includes(postId)) {
            const newLikesCount = likesCount + 1
            createPostLike(authUserId, currentId, postId, newLikesCount)
        }
    }

    const onCommentsBoxClick = (e) => {
        const postId = e.currentTarget.id
        if (!openСommentsPostsIds.includes(postId)) {
            setNewOpenCommentsPostId(postId)
            getAndSetComments(postId)
        }
    }

    return (
        <div className={classes.communicationBox}>
            <div onClick={onLikeBoxClick} className={classes.likesButtonBox} id={post.id}>
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
        openСommentsPostsIds: state.profilePage.openСommentsPostsIds
    }
}

export default compose(connect(mapStateToProps, { createPostLike, deletePostLike, setNewOpenCommentsPostId, getAndSetComments }), withRouter)(PostCommunicationPanel)