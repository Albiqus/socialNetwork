import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { getDateFormat } from '../../../../utils/profile-utils/getFormatDate';
import deleteIcon from '../../../../images/icons/delete-post.png'
import likeEmpty from '../../../../images/icons/like-empty.png'
import like from '../../../../images/icons/like.png'
import comment from '../../../../images/icons/comment.png'
import preloader from '../../../../images/preloaders/ellipsis-preloader.svg'

import classes from './PostsItems.module.css';
import { deleteOnePost } from '../../../../thunks/deleteOnePost';
import { withRouter } from '../../../../hocs/withRouter';
import { createLike } from '../../../../thunks/createLike';
import { deleteLike } from '../../../../thunks/deleteLike';

const PostsItems = ({ createLike, deleteLike, router, deleteOnePost, posts, profileData, deletePostPreloader, likedPostsIds }) => {

    const currentId = router.params.userId
    const authUserId = localStorage.getItem('id')

    const onDeletePostClick = (e) => {
        const postId = e.target.id
        deleteOnePost(authUserId, postId)
    }

    const onLikeBoxClick = (e) => {
        const postId = e.currentTarget.id
        const likesCount = Number(posts.find(post => post.id === postId).likes)
      
        if (likedPostsIds.includes(postId)) {
            const newLikesCount = likesCount - 1
            deleteLike(authUserId, currentId, postId, newLikesCount)
        }
        if (!likedPostsIds.includes(postId)) {
            const newLikesCount = likesCount + 1
            createLike(authUserId, currentId, postId, newLikesCount)
        }
    }

    const postsItems = posts?.map((post) => {
        const date = post.date
        const dateFormat = getDateFormat(date)
        return (
            <div className={classes.postItem} key={post.id}>
                <div className={classes.InfoBox}>
                    <div className={classes.avatarBox}>
                        {profileData.avatarAverage === '' && <img className={classes.avatar} src={require('../../../../images/incognito/incognito-small.png')} alt='аватар'></img>}
                        {profileData.avatarAverage !== '' && <img className={classes.avatar} src={profileData.avatarAverage} alt='аватар'></img>}
                    </div>
                    <NavLink to={`/profile/${post.userId}`} className={classes.fullName}>{profileData.firstName} {profileData.lastName}</NavLink>
                    <p className={classes.date}>{dateFormat}</p>
                    {currentId === authUserId && <img onClick={onDeletePostClick} className={classes.deleteIcon} src={deleteIcon} id={post.id} alt="удалить" />}
                    {deletePostPreloader.status && deletePostPreloader.postId === post.id && <img className={classes.deletePostPreloader} src={preloader} alt=''></img>}
                </div>
                <div className={classes.post}>
                    {post.postText !== '' && <p>{post.postText}</p>}
                    {post.postImage && <div><img src={post.postImage} alt='изображение'></img></div>}
                </div>
                <div className={classes.communicationBox}>
                    <div onClick={onLikeBoxClick} className={classes.likesBox} id={post.id}>
                        {likedPostsIds?.includes(post.id)
                            ? <img src={like} alt="убрать лайк" />
                            : <img src={likeEmpty} alt="лайкнуть" />
                        }
                        {post.likes !== '0' && <p>{post.likes}</p>}
                    </div>
                    <div className={classes.commentsBox}>
                        <img src={comment} alt="прокомментировать" />
                        <p>134</p>
                    </div>
                </div>
            </div>
        )
    })
 
    return (
        <div className={classes.postsItemsBox}>
            {postsItems}
            {postsItems?.length === 0 && <p className={classes.noPostsText}>На стене пока нет ни одной записи</p>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        profileData: state.profilePage.profileData,
        deletePostPreloader: state.profilePage.deletePostPreloader,
        likedPostsIds: state.profilePage.likedPostsIds
    }
}

export default compose(connect(mapStateToProps, { deleteOnePost, createLike, deleteLike }), withRouter)(PostsItems)