import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classes from './PostLikesInfoModal.module.css';
import closeModalIcon from '../../../../../../images/icons/close-modal.png'
import { resetPostLikesUsers, setPostLikesModalStatus } from '../../../../../../store/profile-reducer';

const PostLikesInfoModal = ({ postLikesUsers, setPostLikesModalStatus, resetPostLikesUsers }) => {

    const onCloseModalClick = () => {
        setPostLikesModalStatus(false)
        resetPostLikesUsers()
    }

    const userItems = postLikesUsers?.map((user) => {
        return (
            <div className={classes.userItem} key={user.userId}>
                <div className={classes.avatarBox}>
                    {user.avatar === '' && <NavLink onClick={onCloseModalClick} to={`/profile/${user.userId}`}><img className={classes.avatar} src={require('../../../../../../images/incognito/incognito-small.png')} alt='аватар'></img></NavLink>}
                    {user.avatar !== '' && <NavLink onClick={onCloseModalClick} to={`/profile/${user.userId}`}><img className={classes.avatar} src={user.avatar} alt='аватар'></img></NavLink>}
                </div>
                <NavLink onClick={onCloseModalClick} to={`/profile/${user.userId}`} className={classes.fullName}>{`${user.firstName} ${user.lastName}`}</NavLink>
            </div>
        )
    })

    return (
        <div className={classes.modalBox}>
            <div className={classes.modal}>
                <p className={classes.header}>пользователи, лайкнувшие пост</p>
                <img onClick={onCloseModalClick} className={classes.closeModalIcon} src={closeModalIcon} alt="" />
                {userItems}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        postLikesUsers: state.profilePage.postLikesUsers
    }
}

export default connect(mapStateToProps, { setPostLikesModalStatus, resetPostLikesUsers })(PostLikesInfoModal)