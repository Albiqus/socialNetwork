import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from '../../../hocs/withRouter';
import { createFriendRequest } from '../../../thunks/friends-thunks/createFriendRequest';
import { deleteFriendRequest } from '../../../thunks/friends-thunks/deleteFriendRequest';
import ellipsisPreloader from '../../../images/preloaders/ellipsis-preloader.svg'
import classes from './CommunicationPanel.module.css';

const CommunicationPanel = ({
    router,
    createFriendRequest,
    authUserData,
    friendRequestStatus,
    deleteFriendRequest,
    firendButtonPreloader,
    friendStatus}) => {

    const currentId = router.params.userId
    const authUserId = localStorage.getItem('id')

    const onCreateFriendRequestClick = () => {
        createFriendRequest(
            authUserId,
            currentId,
            authUserData.firstName,
            authUserData.lastName,
            authUserData.avatar,
            authUserData.lastActivityTime,
            authUserData.status
        )
    }


    const onDeleteFriendRequestClick = () => {
        deleteFriendRequest(authUserId, currentId)
    }


    return (
        <div className={classes.communicationPanelBox}>
            {firendButtonPreloader && <button className={classes.toggleFriendButton} disabled><img src={ellipsisPreloader} alt='отправляем заявку..'></img></button>}
            {!firendButtonPreloader && currentId !== authUserId && !friendRequestStatus && !friendStatus &&
                <button onClick={onCreateFriendRequestClick} className={classes.toggleFriendButton}>
                    <p>добавить в друзья</p>
                </button>}
            {!firendButtonPreloader && currentId !== authUserId && friendRequestStatus && 
                <button onClick={onDeleteFriendRequestClick} className={classes.toggleFriendButton}>
                    <p>отменить заявку</p>
                </button>}
            {!firendButtonPreloader && currentId !== authUserId && friendStatus &&
                <button className={classes.toggleFriendButton}>
                    <p>удалить из друзей</p>
                </button>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        authUserData: state.authUserReducer.authUserData,
        friendRequestStatus: state.profilePage.friendRequestStatus,
        firendButtonPreloader: state.profilePage.firendButtonPreloader,
        friendStatus: state.profilePage.friendStatus
    }
}

export default compose(connect(mapStateToProps, { createFriendRequest, deleteFriendRequest }), withRouter)(CommunicationPanel)