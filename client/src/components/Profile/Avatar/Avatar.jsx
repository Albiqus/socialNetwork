import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from '../../../hocs/withRouter';
import { setAvatar } from '../../../thunks/setAvatar';
import classes from './Avatar.module.css';

const Avatar = ({ setAvatar, avatarAverage, router }) => {

    const currentId = router.params.userId
    const authUserId = localStorage.getItem('id')

    const onAvatarChange = (e) => {
        const data = new FormData()
        const img = e.target.files[0]
        data.append('avatar', img)

        setAvatar(data, authUserId)
    }

    return (
        <div className={classes.avatarBox}>
            {avatarAverage === '' && <div>
                <label htmlFor="avatar">
                    <div className={classes.avatarDefault}>
                        {currentId === authUserId && <p>добавьте аватар</p>}
                    </div>
                </label>
                {currentId === authUserId && <input onChange={onAvatarChange} type="file" id="avatar" />}
            </div>}
            {avatarAverage !== '' && <img className={classes.avatar} src={avatarAverage} alt='аватар' ></img>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        avatarAverage: state.profilePage.profileData.avatarAverage,
    }
}

export default compose(connect(mapStateToProps, { setAvatar }), withRouter)(Avatar)