import { connect } from "react-redux"
import { NavLink } from "react-router-dom";
import { compose } from "redux"
import { withRouter } from "../../../hocs/withRouter";
import { isOnline } from "../../../utils/common-utils/isOnline";
import acceptIcon from "../../../images/icons/accept.png"
import rejectIcon from "../../../images/icons/reject.png"
import ellipsisPreloader from '../../../images/preloaders/ellipsis-preloader.svg'
import classes from './FriendsRequests.module.css';
import { deleteFriendRequest } from "../../../thunks/friends-thunks/deleteFriendRequest";
import { addFriend } from "../../../thunks/friends-thunks/addFriend";

const FriendsRequests = ({
    friendsRequests,
    deleteFriendRequest,
    acceptRequestPreloaderId,
    rejectRequestPreloaderId,
    addFriend,
    authUserData }) => {

    const authUserId = localStorage.getItem('id')
  
    const onAcceptButtonClick = (e) => {
        const newFriendId = e.currentTarget.id
        const newFriendData = friendsRequests.filter((request) => request.newFriendId === newFriendId)[0]
        addFriend(newFriendId, authUserId, newFriendData, authUserData)
    }

    const onRejectButtonClick = (e) => {
        const newFriendId = e.currentTarget.id
        deleteFriendRequest(newFriendId, authUserId)
    }

    const requestsItems = friendsRequests.map((request) => {
        const onlineStatus = isOnline(request.lastActivityTime)
        return (
            <div className={classes.requestItem} key={request.newFriendId}>
                <NavLink to={`/profile/${request.newFriendId}`} className={classes.userItem} >
                    <div className={classes.avatarBox}>
                        {onlineStatus && <div className={classes.activityStatus}></div>}
                        {request.avatar === '' && <div className={classes.avatarDefault}></div>}
                        {request.avatar !== '' && <img className={classes.avatar} src={`http://localhost:4000/images/${request.avatar}`} alt='аватар'></img>}
                    </div>
                    <div className={classes.info}>
                        <p className={classes.fullname}><span>{request.firstName}</span> <span>{request.lastName}</span></p>
                        <p className={classes.status}>{request.status}</p>
                    </div>
                </NavLink>
                <div className={classes.buttonsBox}>
                    {acceptRequestPreloaderId === request.newFriendId &&
                        <button disabled>
                            <img className={classes.preloader} src={ellipsisPreloader} alt='добавляем в друзья..'></img>
                        </button>}
                    {acceptRequestPreloaderId !== request.newFriendId &&
                        <button onClick={onAcceptButtonClick} id={request.newFriendId}>
                            <img className={classes.acceptImg} src={acceptIcon} alt="добавить в друзья" />
                        </button>}


                    {rejectRequestPreloaderId === request.newFriendId &&
                        <button disabled>
                            <img className={classes.preloader} src={ellipsisPreloader} alt='добавляем в друзья..'></img>
                        </button>}
                    {rejectRequestPreloaderId !== request.newFriendId &&
                        <button onClick={onRejectButtonClick} id={request.newFriendId}>
                            <img className={classes.rejectImg} src={rejectIcon} alt="отклонить заявку" />
                        </button>}
                </div>
            </div>
        )
    })

    return (
        <div className={classes.friendsRequestsBox}>
            <p className={classes.header}>У вас есть новые заявки в друзья</p>
            {requestsItems}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        acceptRequestPreloaderId: state.friendsPage.acceptRequestPreloaderId,
        rejectRequestPreloaderId: state.friendsPage.rejectRequestPreloaderId,
        authUserData: state.authUserReducer.authUserData,
        friendsRequests: state.friendsPage.friendsRequests
    }
}

export default compose(connect(mapStateToProps, { deleteFriendRequest, addFriend }), withRouter)(FriendsRequests)