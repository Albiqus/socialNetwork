import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classes from './CommentLikesInfoModal.module.css';
import closeModalIcon from '../../../../../../../../images/icons/close-modal.png'
import { resetCommentLikesUsers, setCommentLikesModalStatus } from '../../../../../../../../store/profile-reducer';

const CommentLikesInfoModal = ({ commentLikesUsers, setCommentLikesModalStatus, resetCommentLikesUsers }) => {
    
    const onCloseModalClick = () => {
        setCommentLikesModalStatus(false)
        resetCommentLikesUsers()
    }

    const userItems = commentLikesUsers?.map((user) => {
        return (
            <div className={classes.userItem} key={user.userId}>
                <div className={classes.avatarBox}>
                    {user.avatar === '' && <NavLink onClick={onCloseModalClick} to={`/profile/${user.userId}`}><img className={classes.avatar} src={require('../../../../../../../../images/incognito/incognito-small.png')} alt='аватар'></img></NavLink>}
                    {user.avatar !== '' && <NavLink onClick={onCloseModalClick} to={`/profile/${user.userId}`}><img className={classes.avatar} src={`http://localhost:4000/images/${user.avatar}`} alt='аватар'></img></NavLink>}
                </div>
                <NavLink onClick={onCloseModalClick} to={`/profile/${user.userId}`} className={classes.fullName}>{`${user.firstName} ${user.lastName}`}</NavLink>
            </div>
        )
    })

    return (
        <div className={classes.modalBox}>
            <div className={classes.modal}>
                <p className={classes.header}>пользователи, лайкнувшие комментарий</p>
                <img onClick={onCloseModalClick} className={classes.closeModalIcon} src={closeModalIcon} alt="" />
                {userItems}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        commentLikesUsers: state.profilePage.commentLikesUsers
    }
}

export default connect(mapStateToProps, { setCommentLikesModalStatus, resetCommentLikesUsers })(CommentLikesInfoModal)