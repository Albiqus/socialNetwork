import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { getDateFormat } from '../../../../utils/profile-utils/getFormatDate';
import deleteIcon from '../../../../images/icons/delete-post.png'
import preloader from '../../../../images/preloaders/ellipsis-preloader.svg'
import classes from './PostsItems.module.css';
import { deletePost } from '../../../../thunks/deletePost';
import { withRouter } from '../../../../hocs/withRouter';

const PostsItems = ({router, deletePost, posts, profileData, deletePostPreloader}) => {

    const currentId = router.params.userId
    const authUserId = localStorage.getItem('id')

    const onDeletePostClick = (e) => {
        const postId = e.target.id
        deletePost(authUserId, postId)
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
            </div>
        )
    })

    return (
        <div className={classes.postsItemsBox}>
            {postsItems}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        profileData: state.profilePage.profileData,
        deletePostPreloader: state.profilePage.deletePostPreloader
    }
}

export default compose(connect(mapStateToProps, { deletePost }), withRouter)(PostsItems)