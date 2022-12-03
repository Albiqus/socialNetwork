import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from '../../../hocs/withRouter';
import { setAvatar } from '../../../thunks/profile-thunks/setAvatar';
import { deleteAvatar } from '../../../thunks/profile-thunks/deleteAvatar';
import classes from './Avatar.module.css';
import updateAvatarIcon from '../../../images/icons/update-avatar.png'
import deleteAvatarIcon from '../../../images/icons/delete-avatar.png'
import { updateLastActivityTime } from '../../../thunks/common-thunks/updateLastActivityTime';
import { isOnline } from '../../../utils/common-utils/isOnline';


const Avatar = ({ setAvatar, deleteAvatar, avatar, router, updateLastActivityTime, profileData }) => {

    const currentId = router.params.userId
    const authUserId = localStorage.getItem('id')

    const onAvatarChange = (e) => {
        updateLastActivityTime(authUserId)

        const data = new FormData()
        const img = e.target.files[0]
        data.append('avatar', img)

        setAvatar(data, authUserId)
    }

    const onDeleteAvatarButtonClick = () => {
        updateLastActivityTime(authUserId)
        deleteAvatar(authUserId)
    }

    const onlineStatus = isOnline(profileData.lastActivityTime)

    return (
        <div className={classes.mainBox}>
            <div className={classes.settingsBox}>
                {avatar !== '' && currentId === authUserId && <label className={classes.updateAvatarButton} htmlFor="avatar"><img src={updateAvatarIcon} alt="обновить аватар" /></label>}
                <div className={classes.updateAvatarTooltip}>
                    <p>обновить аватар</p>
                </div>
                {avatar !== '' && currentId === authUserId && <img onClick={onDeleteAvatarButtonClick} className={classes.deleteAvatarButton} src={deleteAvatarIcon} alt="удалить аватар" />}
                <div className={classes.deleteAvatarTooltip}>
                    <p>удалить аватар</p>
                </div>
                {currentId === authUserId && <input onChange={onAvatarChange} type="file" id="avatar" />}
            </div>
            <div className={classes.avatarBox}>
                {onlineStatus && <div className={classes.activityStatus}></div>}
                {avatar === '' && <div>
                    <label htmlFor="avatar">
                        <div className={classes.avatarDefault}>
                            {currentId === authUserId && <p>добавьте аватар</p>}
                        </div>
                    </label>
                    {currentId === authUserId && <input onChange={onAvatarChange} type="file" id="avatar" />}
                </div>}
                {avatar !== '' && <img className={classes.avatar} src={`http://localhost:4000/images/${avatar}`} alt='аватар'></img>}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        avatar: state.profilePage.profileData.avatar,
        profileData: state.profilePage.profileData
    }
}

export default compose(connect(mapStateToProps, { setAvatar, deleteAvatar, updateLastActivityTime }), withRouter)(Avatar)