import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { deleteOnePost } from '../../../../../thunks/profile-thunks/deleteOnePost';
import { getDateFormat } from '../../../../../utils/profile-utils/getFormatDate';
import deleteIcon from '../../../../../images/icons/delete.png'
import preloader from '../../../../../images/preloaders/ellipsis-preloader.svg'
import classes from './PostInfo.module.css';
import { updateLastActivityTime } from '../../../../../thunks/common-thunks/updateLastActivityTime';
import { isOnline } from '../../../../../utils/common-utils/isOnline';
import { withCurrentUserId } from '../../../../../hocs/withCurrentUserId';
import { withAuthUserId } from '../../../../../hocs/withAuthUserId';

const PostInfo = ({
    profileData,
    post,
    deletePostPreloader,
    deletePostButtonPostId,
    deleteOnePost,
    updateLastActivityTime,
    currentId,
    authUserId}) => {


    const date = post.date
    const dateFormat = getDateFormat(date)

    const onDeletePostClick = (e) => {
        updateLastActivityTime(authUserId)

        const postId = e.target.id
        deleteOnePost(authUserId, postId)
    }

    let deleteIconClassName = classes.deleteIcon
    if (deletePostButtonPostId === post.id) deleteIconClassName += ` ${classes.visible}`
    
    const onlineStatus = isOnline(profileData.lastActivityTime)

    return (
        <div className={classes.InfoBox}>
            <div className={classes.avatarBox}>
                {onlineStatus && <div className={classes.activityStatus}></div>}
                {profileData.avatar === '' && <img className={classes.avatar} src={require('../../../../../images/incognito/incognito-small.png')} alt='аватар'></img>}
                {profileData.avatar !== '' && <img className={classes.avatar} src={`http://localhost:4000/images/${profileData.avatar}`} alt='аватар'></img>}
            </div>
            <NavLink to={`/profile/${post.userId}`} className={classes.fullName}>{profileData.firstName} {profileData.lastName}</NavLink>
            <p className={classes.date}>{dateFormat}</p>
            {currentId === authUserId && <img onClick={onDeletePostClick} className={deleteIconClassName} src={deleteIcon} id={post.id} alt="удалить" />}
            {deletePostPreloader.status && deletePostPreloader.postId === post.id && <img className={classes.deletePostPreloader} src={preloader} alt=''></img>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        profileData: state.profilePage.profileData,
        deletePostPreloader: state.profilePage.deletePostPreloader,
    }
}

export default compose(connect(mapStateToProps, { deleteOnePost, updateLastActivityTime }), withCurrentUserId, withAuthUserId)(PostInfo)