import { connect } from "react-redux"
import { NavLink } from "react-router-dom";
import { compose } from "redux"
import { withAuthUserId } from "../../../hocs/withAuthUserId";
import { deleteFriend } from "../../../thunks/friends-thunks/deleteFriend";
import { isOnline } from "../../../utils/common-utils/isOnline";
import ellipsisPreloader from '../../../images/preloaders/ellipsis-preloader.svg'
import classes from './CurrentFriends.module.css';

const CurrentFriends = ({ friends, deleteFriend, deleteFriendPreloaderId, authUserId }) => {


    const onSendMessageButtonClick = () => {

    }

    const onDeleteFriendButtonClick = (e) => {
        const friendId = e.currentTarget.id
        deleteFriend(friendId, authUserId)
    }

    const friendsItems = friends?.map((friend) => {
        const onlineStatus = isOnline(friend.lastActivityTime)
        return (
            <div className={classes.friendItem} key={friend.friendId}>
                <NavLink to={`/profile/${friend.friendId}`} className={classes.userItem} >
                    <div className={classes.avatarBox}>
                        {onlineStatus && <div className={classes.activityStatus}></div>}
                        {friend.avatar === '' && <div className={classes.avatarDefault}></div>}
                        {friend.avatar !== '' && <img className={classes.avatar} src={`http://localhost:4000/images/${friend.avatar}`} alt='аватар'></img>}
                    </div>
                    <div className={classes.info}>
                        <p className={classes.fullname}><span>{friend.firstName}</span> <span>{friend.lastName}</span></p>
                        <p className={classes.status}>{friend.status}</p>
                    </div>
                </NavLink>
                <div className={classes.buttonsBox}>
                    <button onClick={onSendMessageButtonClick} id={friend.friendId}>написать сообщение</button>
                    {deleteFriendPreloaderId !== friend.friendId &&
                        <button onClick={onDeleteFriendButtonClick} id={friend.friendId}>удалить из друзей</button>}
                    {deleteFriendPreloaderId === friend.friendId &&
                        <button disabled>
                            <img className={classes.preloader} src={ellipsisPreloader} alt='удаляем друга..'></img>
                        </button>}
                </div>
            </div>
        )
    })

    return (
        <div className={classes.friendsBox}>
            <p className={classes.header}>Друзья {friendsItems && `(${friendsItems.length})`}</p>
            {friends && friendsItems}
            {!friends && <p className={classes.emptyFirendsHeader} >пока нет ни одного друга</p>}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        deleteFriendPreloaderId: state.friendsPage.deleteFriendPreloaderId,
        friends: state.friendsPage.friends
    }
}

export default compose(connect(mapStateToProps, { deleteFriend }), withAuthUserId )(CurrentFriends)